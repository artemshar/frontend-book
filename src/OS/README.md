# Operation Systems (Windows / Linux / WSL)

## Get the IP address by using PowerShell
``` PowerShell
Get-NetIPAddress -AddressFamily IPV4
```

## Bash 

### How to know a folder size

```bash
du -hs /mnt/d/foldername
```

## How to check which program is using a port in Windows?

PowerShell

1. **Displays all connections and listening ports to find a necessary.**
```
netstat -ano
```

or use the command:
```
netstat -ano | findstr :port_number
```
replace port_number with the number of the port you want to check.

2.  **Finding Process with PID in Task Manager**
* Once you have the PID from the netstat command, open Task Manager (Ctrl + Shift + Esc).
* Go to the "Details" tab.
* Click on "View" in the menu bar and select "Columns."
* Check "PID (Process Identifier)" to display the PID column.
* Look for the PID identified in the netstat command. This will show you the program associated with that PID.



## How to configure server Timezone (Linux)

```sudo dpkg-reconfigure tzdata```


## How to create a new user (Linux)

```sudo adduser [username]```