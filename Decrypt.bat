@echo off
%SystemRoot%\explorer.exe %TEMP% 
REM cd /d D:\User\Desktop\EncryptFiles 
node decrypt.js
GOTO :EOF

