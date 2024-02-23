# Geocoding in Midway Cluster

For offline geocoding, you need to run ArcPy scripts in the Midway or MidwayR environment. The following instructions will help you set up Arcpy on your home directory. ArcGIS server needs to be located inside the user's home directory. So first download ArcGIS server setup and copy to your home folder.

These instructions explain the necessary steps for ArcGIS Server installation and how to test it with a simple ArcPy script.

[Installation of ArcGIS Server 10.9](https://www.notion.so/Installation-of-ArcGIS-Server-10-9-f4181454c92a479cb031c84ceccc09cd?pvs=21)

Once ArcGIS is installed, the environment needs to be configured.

```bash
export ARCGISHOME=$HOME/arcgis/server

# If you need only Python and arcpy you don't need to start the server.
# Note that you have to use ArcGIS' own Python installation instead of the
# default system installation. Python on ArcGIS Server for Linux runs
# a Windows version of Python under Wine.

# You start the ArcGIS Python console with:
/home/<user>/arcgis/server/tools/python

#If it does not work, Use Anaconda3 2019.03 module 
module load Anaconda3/2019.03
source activate arcpy

```

Open Python and test if 'import arcpy' works.

**Geocoding Example**

```bash
import arcpy
from arcpy import env
env.workspace = "home/pnsinha/Documents/Geocoding/atlanta.gdb
arcpy.CreateAddressLocator_geocoding("US Address - Dual Ranges", "streets Primary", "'Feature ID' FeatureID VISIBLE NONE;'*From Left' L_F_ADD VISIBLE NONE;'*To Left' L_T_ADD VISIBLE NONE;'*From Right' R_F_ADD VISIBLE NONE;'*To Right' R_T_ADD VISIBLE NONE;'Prefix Direction' PREFIX VISIBLE NONE;'Prefix Type' PRE_TYPE VISIBLE NONE;'*Street Name' NAME VISIBLE NONE;'Suffix Type' TYPE VISIBLE NONE;'Suffix Direction' SUFFIX VISIBLE NONE;'Left City or Place' CITYL VISIBLE NONE;'Right City or Place' CITYR VISIBLE NONE;'Left Zipcode' ZIPL VISIBLE NONE;'Right Zipcode' ZIPR VISIBLE NONE;'Left State' State_Abbr VISIBLE NONE;'Right State' State_Abbr VISIBLE NONE", Atlanta_AddressLocator, "", "DISABLED")

address_table = "customer"
address_locator =  "Atlanta_AddressLocator"
address_fields = "street Address; City City; State State; ZIP zip"
geocode_result = "geocode_result"
arcpy.GeocodeAddresses(address_table, address_locator, address_fields, geocode_result, 'STATIC')
```

```python
import arcpy
from arcpy import env
address_table="\\home\\pnsinha\\arcgis\\server\\tools\\ChicagoLeadTest.csv"
address_locator = "\\scratch\\midway2\\rcc\\project2\\incoming\\geocoding\\Geocoding_Data\\USA_LocalComposite"
address_fields = "Address Address ;City City;State State; ZIP_Code Postal"
geocode_result = "~\\geocode_result"
# Process: Geocode Addresses
arcpy.GeocodeAddresses_geocoding(address_table, address_locator, address_fields, geocode_result, 'STATIC')

```

```nix
./python /scratch/midway2/rcc/project2/incoming/geocoding/geocode_script.py
```

```nix
c:\Program Files\ArcGIS\Server\framework\runtime\ArcGIS\bin\Python\Scripts>conda create --clone arcgispro-py3 --prefix "Z:\home\pnsinha\arcgis\bin\Python\envs\test"
proswap Z:\home\pnsinha\arcgis\bin\Python\envs\test
```

```nix
export ARCGISHOME=$HOME/arcgis/server
conda create --name arcgis  --copy --clone base
conda install -c esri arcgis-server-py3=10.9.0
```

python -v

```nix
- Uninstalling prior versions of arcgis widget
Installing /software/python-anaconda-2020.11-el8-x86_64/envs/arcgis/lib/python3.7/site-packages/arcgis/widgets/js/dist -> arcgis
Up to date: /software/python-anaconda-2020.11-el8-x86_64/envs/arcgis/share/jupyter/nbextensions/arcgis/arcgis-map-ipywidget.js
Up to date: /software/python-anaconda-2020.11-el8-x86_64/envs/arcgis/share/jupyter/nbextensions/arcgis/arcgis-map-ipywidget.js.map
Up to date: /software/python-anaconda-2020.11-el8-x86_64/envs/arcgis/share/jupyter/nbextensions/arcgis/extension.js
- Validating: OK

    To initialize this nbextension in the browser every time the notebook (or other app) loads:

          jupyter nbextension enable arcgis --py --sys-prefix

Enabling notebook extension arcgis/extension...
      - Validating: OK

\
For instructions on how to setup the Python 3 runtime for ArcGIS Server on Linux and a full listing of supported geoprocessing tools, see the README file found at:

    /software/python-anaconda-2020.11-el8-x86_64/envs/arcgis/lib/python3.7/site-packages/arcpy/README.txt
```