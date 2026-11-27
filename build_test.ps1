if (Test-Path .next/lock) {
    Remove-Item -Force .next/lock
}
npx --yes pnpm run build
