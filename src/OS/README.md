# Operation Systems (Windows / Linux / WSL)

## Get local IP addresses by using PowerShell
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

## Create a new user (Linux)

```sudo adduser [username]```

## Configure server Timezone (Linux)

```sudo dpkg-reconfigure tzdata```

## Check last update of a file

```date -r README.md```

### See all commands of 'date'

```man date```

## Restart a service on Linux system

```sudo systemctl restart [service_name]```
e.g. ```sudo systemctl restart nginx```


## Find your public IP address

```bash
curl icanhazip.com
# or
wget -qO- icanhazip.com
```

- ifconfig.me