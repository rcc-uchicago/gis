# International address file

International addresses often consist of Unicode character. Unfortunately, Excel’s built-in Save as .csv does not preserve the Unicode characters. So we consider other options.

## Option 1 – Save as Unicode text using Excel and Notepad

Use this option if you do not want to download other software and need to use only Excel.

1. Open the excel file using Microsoft Excel and in “Save as” window use

**Unicode Text (*.txt)**

for Save as type dropdown

!https://adhoctuts.com/wp-content/uploads/2018/08/csv_excel_save_as.png

2. Open the exported .txt file with Notepad and choose File -> Save As. In Save As window change the Encoding input value to **UTF-8** and click the Save button to replace the file

!https://adhoctuts.com/wp-content/uploads/2018/08/csv_notepad_save_as.png

3. Change the extension of the new file from .txt to **.csv**.

4. Import the new .csv file into the mysql table and choose Tab symbol (\t) as field terminator when importing.

## Option 2 – LibreOffice Calc Save As .csv

I like this option, the Save As CSV function of LibreOffice is excellent and it provides CSV configuration options as well.

1. Download and install LibreOffice from https://www.libreoffice.org

2. Open the excel file using LibreOffice Calc and choose File -> Save As…

3. In Save As window choose **Text CSV (.csv)(*.csv)** as Save as type

!https://adhoctuts.com/wp-content/uploads/2018/08/csv_libre_office_save_as.png

4. Click Use Text CSV Format button if prompted.

5. Set Character Set: **Unicode (UTF-8)** in Field Options window and set other CSV options if needed and click OK button.

!https://adhoctuts.com/wp-content/uploads/2018/08/csv_libre_options.png

6. Import the new .csv file into the mysql table.