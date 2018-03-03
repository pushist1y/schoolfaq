#!/bin/bash
systemctl stop schoolfaq
cd ../frontend/schoolfaq-client
npm install
npm run build-dev
cd ../../backend/SchoolFaq.Core
rm -rf ./wwwroot
mkdir wwwroot
cd ../..
cp -a ./frontend/schoolfaq-client/dist/. ./backend/SchoolFaq.Core/wwwroot
cd backend/SchoolFaq.Core
dotnet restore
dotnet build
dotnet ef database update
dotnet publish -o /opt/schoolfaq-dist
systemctl start schoolfaq
