# PowerShell script to check image sizes in public folder
# Run this to see which images are too large

$publicPath = ".\public"
$tipImages = @(
    "coolent.jpg",
    "engineoil.jpg", 
    "carbattry.jpg",
    "frontbumper.webp",
    "TipM4.jpg",
    "tips_m5.webp",
    "tips_m6.png",
    "breaks.png",
    "TipS3.webp",
    "Tips_s4.png",
    "Tips_seasonal_1.png",
    "Tips_seasonal_2.png",
    "TipM7.jpg",
    "Tips_S5.jpg",
    "TipM8.webp",
    "advice.png"
)

Write-Host "`n========== TIP IMAGE SIZES ==========" -ForegroundColor Cyan
Write-Host "Checking images in: $publicPath`n" -ForegroundColor Gray

$totalSize = 0
$largeImages = @()

foreach ($image in $tipImages) {
    $imagePath = Join-Path $publicPath $image
    
    if (Test-Path $imagePath) {
        $file = Get-Item $imagePath
        $sizeKB = [math]::Round($file.Length / 1KB, 2)
        $sizeMB = [math]::Round($file.Length / 1MB, 2)
        $totalSize += $file.Length
        
        # Flag images over 200KB as large
        if ($sizeKB -gt 200) {
            $largeImages += $image
            Write-Host "⚠️  " -ForegroundColor Red -NoNewline
        } else {
            Write-Host "✅  " -ForegroundColor Green -NoNewline
        }
        
        if ($sizeMB -gt 1) {
            Write-Host "$image : $sizeMB MB" -ForegroundColor Yellow
        } else {
            Write-Host "$image : $sizeKB KB"
        }
    } else {
        Write-Host "❌  $image : NOT FOUND" -ForegroundColor Red
    }
}

Write-Host "`n========== SUMMARY ==========" -ForegroundColor Cyan
Write-Host "Total Size: $([math]::Round($totalSize / 1MB, 2)) MB" -ForegroundColor Yellow
Write-Host "Images over 200KB: $($largeImages.Count)" -ForegroundColor $(if ($largeImages.Count -gt 0) { "Red" } else { "Green" })

if ($largeImages.Count -gt 0) {
    Write-Host "`nLarge images that need optimization:" -ForegroundColor Yellow
    foreach ($img in $largeImages) {
        Write-Host "  - $img" -ForegroundColor Red
    }
    Write-Host "`n💡 Recommendation: Compress these images to under 200KB each" -ForegroundColor Cyan
    Write-Host "   Use: https://tinypng.com or https://squoosh.app`n" -ForegroundColor Gray
}
