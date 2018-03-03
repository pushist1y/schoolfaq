cd ..\frontend\schoolfaq-client\
call npm run build-dev
cd ..\..\backend\SchoolFaq.Core\wwwroot\
for /F "delims=" %%i in ('dir /b') do (rmdir "%%i" /s/q || del "%%i" /s/q)
cd ..\..\..
xcopy /s "frontend\schoolfaq-client\dist" "backend\SchoolFaq.Core\wwwroot"
pause