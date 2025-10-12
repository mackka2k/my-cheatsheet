# Network Administration
## 👨‍💼 What is a Network Administrator Role?

**Network Admin** manages and maintains computer networks for organizations.

### Key Responsibilities
- Design & implement network infrastructure
- Monitor network performance & security  
- Troubleshoot network issues
- Manage network devices & configurations
- Ensure network availability & reliability
- Implement security policies & procedures
- Plan for network growth & scalability
- Document network configurations

### Required Skills
- Network protocols (TCP/IP, HTTP, FTP)
- Routing & switching concepts
- Firewall & security configurations
- DNS, DHCP, network services
- Troubleshooting methodologies
- Network monitoring tools
- Scripting & automation
- Documentation & communication
---
## 🔧 What is Cisco Packet Tracer?

**Packet Tracer** - Cisco's network simulation tool for learning & testing network configurations.

### Key Features
- Network simulation & modeling
- Device configuration practice
- Protocol analysis & testing
- Virtual lab environment
- Real-time network monitoring
- Multi-user collaboration
- Assessment & grading tools
- Cisco Networking Academy integration

### Use Cases
- Learning network concepts
- Practicing device configurations
- Testing network designs
- Troubleshooting scenarios
- Certification preparation (CCNA, CCNP)
- Teaching & training
- Network prototyping
- Skills assessment
---
## 📥 How to Download Cisco Packet Tracer

**Requires**: Cisco Networking Academy account (free for students/instructors)

### Download Steps
1. Visit: https://www.netacad.com/learning-collections/cisco-packet-tracer?courseLang=en-US
2. Sign in to your account
3. Navigate to Packet Tracer section
4. Select appropriate version (Windows/macOS/Linux)
5. Download installer file
6. Run installation wizard
7. Complete setup process
8. Launch Packet Tracer

---

## 🔧 DHCP Client Lab

**Download Packet Tracer File**: [DHCP+Client.pkt](content/[NETWORK_ADMIN]/DHCP+Client.pkt)

### Scenario
Simulate how an internet service provider (ISP) assigns IP addresses to client devices using DHCP.

**Objective**: Understand the DHCP client process and how ISPs automatically configure client devices with network settings.

**Network Setup**:
- ISP router acting as DHCP server
- Client devices (PCs, laptops, phones)
- Modem/router at client location
- Internet connection simulation

**Client Process (DORA)**:
1. **Discover** - Client broadcasts DHCP Discover message
2. **Offer** - ISP server responds with DHCP Offer
3. **Request** - Client requests the offered IP address
4. **Acknowledge** - Server confirms IP assignment

**Configuration Steps**:
1. Configure client devices for DHCP
2. Set up ISP router with DHCP pool
3. Configure client router/modem for DHCP
4. Test automatic IP assignment
5. Verify internet connectivity
6. Check DNS resolution

**Expected Result**: Client devices automatically receive public IP addresses and can access the internet.

<iframe src="content/[NETWORK_ADMIN]/DHCP+Cheat+Sheet.pdf" width="100%" height="600px" style="border: 1px solid #ccc;">
  <p>Your browser does not support iframes. <a href="content/[NETWORK_ADMIN]/DHCP+Cheat+Sheet.pdf">Download the DHCP Cheat Sheet PDF</a></p>
</iframe>

<iframe src="content/[NETWORK_ADMIN]/DHCP+Basics+-+Beginner's+Guide.pdf" width="100%" height="600px" style="border: 1px solid #ccc;">
  <p>Your browser does not support iframes. <a href="content/[NETWORK_ADMIN]/DHCP+Basics+-+Beginner's+Guide.pdf">Download the DHCP Basics Beginner's Guide PDF</a></p>
</iframe>

---

## 🖥️ DHCP Server Lab

**Download Packet Tracer File**: [DHCP+Server.pkt](content/[NETWORK_ADMIN]/DHCP+Server.pkt)

### Scenario
Configure a router to act as a DHCP server and automatically assign IP addresses to multiple PCs on the network.

**Objective**: Set up DHCP service on a router to provide automatic IP address assignment to client devices.

**Network Setup**:
- Router with DHCP server functionality
- Multiple PCs connected to the network
- Switch connecting all devices
- Router interface configured with IP pool

**Configuration Steps**:
1. Enable DHCP service on router
2. Create DHCP pool with IP range
3. Configure network and subnet mask
4. Set default gateway
5. Configure DNS servers
6. Exclude specific IP addresses if needed
7. Test DHCP assignment on PCs

**Expected Result**: All PCs should automatically receive IP addresses from the router's DHCP pool.

---

## 🔄 DHCP Relay Lab

**Download Packet Tracer File**: [DHCP+Relay.pkt](content/[NETWORK_ADMIN]/DHCP+Relay.pkt)

### Scenario
Configure DHCP relay agents to forward DHCP requests across different network segments to a central DHCP server.

**Objective**: Set up DHCP relay functionality to enable DHCP service across multiple VLANs or subnets using a centralized DHCP server.

**Network Setup**:
- Central DHCP server on one subnet
- Multiple client subnets/VLANs
- Routers acting as DHCP relay agents
- Switches connecting different segments

**Configuration Steps**:
1. Configure central DHCP server with multiple scopes
2. Enable IP helper-address on router interfaces
3. Configure DHCP relay on each subnet
4. Set up routing between subnets
5. Test DHCP requests from different VLANs
6. Verify IP assignment from central server
7. Check DHCP option 82 (relay agent information)

**Expected Result**: Clients on different subnets receive IP addresses from the central DHCP server through relay agents.

---

## 🌐 Basic DNS Resolution in a LAN

### Scenario
Set up and configure DNS services within a local area network to enable name resolution for internal resources.

**Objective**: Configure DNS server to resolve hostnames to IP addresses within a LAN environment.

**Network Setup**:
- DNS server (Windows Server or Linux)
- Multiple client devices
- Router connecting to internet
- Internal network resources (servers, printers)

**Configuration Steps**:
1. Install DNS server role/service
2. Create forward lookup zones
3. Add A records for internal hosts
4. Configure reverse lookup zones
5. Set up DNS forwarding to external servers
6. Configure client DNS settings
7. Test name resolution
8. Verify external DNS resolution

**DNS Record Types**:
- **A Record** - Maps hostname to IPv4 address
- **AAAA Record** - Maps hostname to IPv6 address
- **CNAME** - Canonical name (alias)
- **MX Record** - Mail exchange server
- **PTR Record** - Reverse DNS lookup

**Expected Result**: Clients can resolve internal hostnames and access external websites through DNS.

---

## 🔧 Set Router Name-Servers

**Download Packet Tracer File**: [DNS.pkt](content/[NETWORK_ADMIN]/DNS.pkt)

### Scenario
Configure DNS name servers on a router to enable DNS resolution for network devices and improve internet connectivity.

**Objective**: Set up DNS name servers on router to provide DNS resolution services to all connected devices.

**Network Setup**:
- Router with DNS configuration capability
- Multiple client devices
- Internet connection
- DNS servers (internal or external)

**Configuration Steps**:
1. Access router configuration (CLI or web interface)
2. Navigate to DNS settings
3. Configure primary DNS server (8.8.8.8)
4. Configure secondary DNS server (8.8.4.4)
5. Set up backup DNS servers (1.1.1.1, 1.0.0.1)
6. Enable DNS forwarding if needed
7. Test DNS resolution
8. Verify internet connectivity

**Common DNS Servers**:
- **8.8.8.8** - Google Primary DNS
- **8.8.4.4** - Google Secondary DNS
- **1.1.1.1** - Cloudflare Primary DNS
- **1.0.0.1** - Cloudflare Secondary DNS
- **208.67.222.222** - OpenDNS Primary
- **208.67.220.220** - OpenDNS Secondary

**Router Commands (Cisco)**:
```
ip name-server 8.8.8.8
ip name-server 8.8.4.4
ip name-server 1.1.1.1
ip domain-lookup
```

**Expected Result**: All devices on the network can resolve domain names and access the internet.

---

## 🔄 How to Update Cisco IOS Routers

**Download Packet Tracer File**: [Router+IOS.pkt](content/[NETWORK_ADMIN]/Router+IOS.pkt)

### Scenario
Update Cisco router firmware to latest IOS version for security patches, bug fixes, and new features.

**Objective**: Safely upgrade router IOS software while maintaining network connectivity and minimizing downtime.

**Prerequisites**:
- Current IOS version information
- New IOS image file
- TFTP/FTP server or USB drive
- Console access to router
- Backup of current configuration

**Pre-Update Steps**:
1. Check current IOS version: `show version`
2. Verify available flash memory: `show flash:`
3. Backup current configuration: `copy running-config startup-config`
4. Download new IOS image to TFTP server
5. Verify image integrity and compatibility

**Update Process**:
1. Connect to router via console
2. Enter privileged mode: `enable`
3. Copy new IOS to flash: `copy tftp: flash:`
4. Set boot system: `boot system flash:ios-image.bin`
5. Save configuration: `copy running-config startup-config`
6. Reload router: `reload`

**Post-Update Verification**:
1. Check new IOS version: `show version`
2. Verify all interfaces are up: `show ip interface brief`
3. Test connectivity to other devices
4. Verify routing tables: `show ip route`
5. Check for any error messages

**Rollback Plan**:
- Keep old IOS image on flash
- Document previous boot system command
- Test rollback procedure in lab first

**Expected Result**: Router successfully boots with new IOS version and maintains all functionality.

---

## 🔄 How to Update Cisco IOS Switches

**Download Packet Tracer File**: [Switch+IOS.pkt](content/[NETWORK_ADMIN]/Switch+IOS.pkt)

### Scenario
Update Cisco switch firmware to latest IOS version for security patches, bug fixes, and new features.

**Objective**: Safely upgrade switch IOS software while maintaining network connectivity and minimizing downtime.

**Prerequisites**:
- Current IOS version information
- New IOS image file
- TFTP/FTP server or USB drive
- Console access to switch
- Backup of current configuration

**Pre-Update Steps**:
1. Check current IOS version: `show version`
2. Verify available flash memory: `show flash:`
3. Backup current configuration: `copy running-config startup-config`
4. Download new IOS image to TFTP server
5. Verify image integrity and compatibility

**Update Process**:
1. Connect to switch via console
2. Enter privileged mode: `enable`
3. Copy new IOS to flash: `copy tftp: flash:`
4. Set boot system: `boot system flash:ios-image.bin`
5. Save configuration: `copy running-config startup-config`
6. Reload switch: `reload`

**Post-Update Verification**:
1. Check new IOS version: `show version`
2. Verify all interfaces are up: `show ip interface brief`
3. Test connectivity to other devices
4. Verify VLAN configuration: `show vlan brief`
5. Check for any error messages

**Rollback Plan**:
- Keep old IOS image on flash
- Document previous boot system command
- Test rollback procedure in lab first

**Expected Result**: Switch successfully boots with new IOS version and maintains all functionality.

---
