$port = 8080
$root = Split-Path -Parent $MyInvocation.MyCommand.Path

# Lokale IP-Adresse ermitteln (für Handy-Zugriff im WLAN)
$localIp = (Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.InterfaceAlias -notmatch 'Loopback' -and $_.IPAddress -notmatch '^169\.254' } | Select-Object -First 1).IPAddress
if (-not $localIp) { $localIp = "localhost" }

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
Write-Host "=====================================================" -ForegroundColor Green
Write-Host " SellMate AI - PWA Server gestartet!" -ForegroundColor Green
Write-Host " Am PC öffnen:    http://localhost:$port" -ForegroundColor Cyan
Write-Host " Projektordner:   $root" -ForegroundColor Gray
Write-Host "=====================================================" -ForegroundColor Green

Start-Process "http://localhost:$port"

$mimeTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".js"   = "application/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".svg"  = "image/svg+xml"
  ".css"  = "text/css; charset=utf-8"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
}

$listener.Start()

try {
  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $relPath = $request.Url.LocalPath.TrimStart('/')
    if ([string]::IsNullOrEmpty($relPath)) { $relPath = "index.html" }
    $filePath = Join-Path $root $relPath

    if (Test-Path $filePath -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
      $response.ContentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
      $bytes = [System.IO.File]::ReadAllBytes($filePath)
      $response.ContentLength64 = $bytes.Length
      $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $response.StatusCode = 404
    }
    $response.OutputStream.Close()
  }
} finally {
  $listener.Stop()
}
