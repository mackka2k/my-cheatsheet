# Every Type of QR Codes, Barcodes & Codes Explained

## 📊 Linear Codes

### 📏 Code-128

**Definition:** Code-128 is a high-density linear barcode symbology that can encode all 128 ASCII characters.

**What it is:** Code-128 is one of the most versatile linear barcodes, capable of encoding the full ASCII character set. It's widely used in shipping, packaging, and inventory management.

**Key Features:**
- **High density**: Compact encoding of data
- **Full ASCII support**: All 128 ASCII characters
- **Three character sets**: A, B, and C for different data types
- **Check digit**: Built-in error detection
- **Variable length**: No fixed length requirement

**Technical Details:**
```
Character Set A: Control characters, uppercase letters, numbers
Character Set B: Lowercase letters, uppercase letters, numbers
Character Set C: Numeric data (2 digits per symbol)
Check Digit: Modulo 103 checksum
Start/Stop: Special start and stop characters
```

**Common Uses:**
- **Shipping labels**: Package tracking and identification
- **Inventory management**: Product identification
- **Healthcare**: Patient identification and medication tracking
- **Manufacturing**: Part and component identification

**Example:**
```
Data: "Hello World"
Code-128: [Start B] H e l l o [Space] W o r l d [Check] [Stop]
```

---

### 🔢 Code-11

**Definition:** Code-11 is a linear barcode symbology primarily used for telecommunications equipment identification.

**What it is:** Code-11 is a simple barcode that can encode digits 0-9 and the dash character (-). It's commonly used in telecommunications and some industrial applications.

**Key Features:**
- **Numeric only**: Encodes digits 0-9 and dash (-)
- **Two check digits**: C and K check digits for error detection
- **Variable length**: No fixed length requirement
- **Simple structure**: Easy to implement and decode

**Technical Details:**
```
Characters: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -
Check Digits: C (modulo 11) and K (modulo 9)
Start/Stop: Same character (typically 1)
```

**Common Uses:**
- **Telecommunications**: Equipment identification
- **Industrial**: Simple numeric identification
- **Legacy systems**: Older identification systems

**Example:**
```
Data: "123-45"
Code-11: [Start] 1 2 3 - 4 5 [C Check] [K Check] [Stop]
```

---

### 🔄 Code-2of5 Interleaved

**Definition:** Interleaved 2 of 5 is a linear barcode that encodes pairs of digits, with one digit encoded in the bars and the other in the spaces.

**What it is:** Interleaved 2 of 5 is a high-density numeric barcode where digits are encoded in pairs. It's widely used in retail and inventory management.

**Key Features:**
- **Numeric only**: Encodes only digits 0-9
- **Even length**: Must have even number of digits
- **High density**: Compact encoding of numeric data
- **Check digit**: Optional modulo 10 check digit
- **Wide usage**: Common in retail and logistics

**Technical Details:**
```
Encoding: Pairs of digits, one in bars, one in spaces
Length: Must be even (add leading zero if odd)
Check Digit: Optional modulo 10
Start/Stop: 4 narrow bars/spaces
```

**Common Uses:**
- **Retail**: Product identification and pricing
- **Logistics**: Package and shipment tracking
- **Inventory**: Stock management and tracking
- **Warehousing**: Bin and location identification

**Example:**
```
Data: "123456"
Interleaved 2of5: [Start] 12 34 56 [Check] [Stop]
```

---

### 📋 Code-39

**Definition:** Code-39 is a linear barcode that can encode 43 characters including uppercase letters, numbers, and special characters.

**What it is:** Code-39 is one of the most widely used barcode symbologies, especially in non-retail applications. It's simple, reliable, and widely supported.

**Key Features:**
- **43 characters**: A-Z, 0-9, and 7 special characters
- **Self-checking**: Built-in error detection
- **Variable length**: No fixed length requirement
- **Wide usage**: Common in industrial and government applications
- **Human readable**: Can include human-readable text below

**Technical Details:**
```
Characters: A-Z, 0-9, space, -, ., $, /, +, %
Check Digit: Optional modulo 43
Start/Stop: * (asterisk)
Width: 9 bars/spaces per character
```

**Common Uses:**
- **Government**: Military and government identification
- **Healthcare**: Patient and medication identification
- **Manufacturing**: Part and component identification
- **Automotive**: Vehicle identification numbers (VIN)

**Example:**
```
Data: "HELLO"
Code-39: * H E L L O * [Check] *
```

---

### 🔤 Code-39 Full ASCII

**Definition:** Code-39 Full ASCII is an extension of Code-39 that can encode all 128 ASCII characters using special character combinations.

**What it is:** Code-39 Full ASCII uses special two-character combinations to represent lowercase letters and additional ASCII characters not available in standard Code-39.

**Key Features:**
- **Full ASCII**: All 128 ASCII characters
- **Two-character encoding**: Special characters use two Code-39 characters
- **Backward compatible**: Standard Code-39 readers can decode basic characters
- **Extended functionality**: Supports lowercase and special characters

**Technical Details:**
```
Basic: A-Z, 0-9, space, -, ., $, /, +, %
Extended: Uses $ prefix for special characters
Examples: $A = a, $B = b, $C = c, etc.
```

**Common Uses:**
- **Extended applications**: Where full ASCII is needed
- **Legacy systems**: Upgrading from Code-39
- **Special characters**: Applications requiring special symbols

**Example:**
```
Data: "Hello World!"
Code-39 Full ASCII: * H E L L O [Space] W O R L D $! *
```

---

### 📊 Code-93

**Definition:** Code-93 is a linear barcode that can encode all 128 ASCII characters with higher density than Code-39.

**What it is:** Code-93 is a more compact version of Code-39 that can encode the full ASCII character set. It's used in applications where space is limited.

**Key Features:**
- **High density**: More compact than Code-39
- **Full ASCII**: All 128 ASCII characters
- **Two check digits**: C and K check digits for error detection
- **Variable length**: No fixed length requirement
- **Better error detection**: More robust than Code-39

**Technical Details:**
```
Characters: All 128 ASCII characters
Check Digits: C (modulo 47) and K (modulo 47)
Start/Stop: Special start and stop characters
Density: Higher than Code-39
```

**Common Uses:**
- **Space-constrained applications**: Where Code-39 is too large
- **High-density requirements**: More data in less space
- **Legacy upgrades**: Replacing Code-39 with better density

**Example:**
```
Data: "Hello World"
Code-93: [Start] H e l l o [Space] W o r l d [C Check] [K Check] [Stop]
```

---

### 🏷️ Flattermarken

**Definition:** Flattermarken is a German postal barcode system used for mail sorting and tracking.

**What it is:** Flattermarken is a specialized barcode used by the German postal service (Deutsche Post) for automated mail sorting and tracking.

**Key Features:**
- **Postal specific**: Designed for mail sorting
- **German standard**: Used by Deutsche Post
- **Machine readable**: Optimized for postal sorting machines
- **Tracking**: Enables mail tracking and delivery confirmation

**Technical Details:**
```
Format: Specialized postal barcode format
Usage: German postal system
Purpose: Mail sorting and tracking
```

**Common Uses:**
- **German mail**: Deutsche Post mail sorting
- **International mail**: German international mail
- **Package tracking**: Mail and package tracking

---

### 📦 GS1-128 (UCC/EAN-128)

**Definition:** GS1-128 is a linear barcode that can encode multiple data elements using Application Identifiers (AIs).

**What it is:** GS1-128 is a versatile barcode that can encode multiple pieces of information in a single barcode using standardized Application Identifiers.

**Key Features:**
- **Multiple data elements**: Can encode various types of data
- **Application Identifiers**: Standardized data identifiers
- **GS1 standard**: Part of the GS1 system
- **Variable length**: Flexible data encoding
- **Check digit**: Built-in error detection

**Technical Details:**
```
Format: Code-128 with GS1 Application Identifiers
AIs: Standardized prefixes for different data types
Examples: (01) = GTIN, (10) = Batch/Lot, (17) = Expiry Date
```

**Common Uses:**
- **Supply chain**: Product identification and tracking
- **Healthcare**: Medication and medical device tracking
- **Food industry**: Batch tracking and expiry dates
- **Logistics**: Package and shipment identification

**Example:**
```
Data: GTIN: 12345678901234, Batch: ABC123, Expiry: 20241231
GS1-128: (01)12345678901234(10)ABC123(17)20241231
```

---

### 🔢 MSI

**Definition:** MSI (Modified Plessey) is a linear barcode used primarily in inventory management and retail applications.

**What it is:** MSI is a numeric barcode that uses a modified version of the Plessey code. It's commonly used in retail and inventory systems.

**Key Features:**
- **Numeric only**: Encodes digits 0-9
- **Variable length**: No fixed length requirement
- **Check digit**: Modulo 10 check digit
- **Simple structure**: Easy to implement and decode

**Technical Details:**
```
Characters: 0-9 only
Check Digit: Modulo 10
Start/Stop: Special start and stop characters
```

**Common Uses:**
- **Retail**: Product identification and pricing
- **Inventory**: Stock management and tracking
- **Warehousing**: Bin and location identification

**Example:**
```
Data: "123456"
MSI: [Start] 1 2 3 4 5 6 [Check] [Stop]
```

---

### 💊 Pharmacode One-Track

**Definition:** Pharmacode One-Track is a specialized barcode used in the pharmaceutical industry for medication identification.

**What it is:** Pharmacode One-Track is a simple numeric barcode designed specifically for pharmaceutical applications, particularly for medication identification and tracking.

**Key Features:**
- **Pharmaceutical specific**: Designed for medication identification
- **Numeric only**: Encodes digits 0-9
- **Simple structure**: Easy to implement and decode
- **Industry standard**: Widely used in pharmaceutical industry

**Technical Details:**
```
Characters: 0-9 only
Purpose: Pharmaceutical identification
Industry: Healthcare and pharmaceutical
```

**Common Uses:**
- **Medication identification**: Drug and medication tracking
- **Pharmaceutical packaging**: Medicine packaging identification
- **Healthcare**: Patient safety and medication management

---

### 💊 Pharmacode Two-Track

**Definition:** Pharmacode Two-Track is an enhanced version of Pharmacode that can encode more data using two tracks.

**What it is:** Pharmacode Two-Track extends the basic Pharmacode to include more information by using two parallel tracks of data.

**Key Features:**
- **Two tracks**: Parallel data tracks for more information
- **Enhanced data**: More information than single-track version
- **Pharmaceutical specific**: Designed for medication identification
- **Industry standard**: Used in pharmaceutical industry

**Technical Details:**
```
Format: Two parallel tracks of data
Purpose: Enhanced pharmaceutical identification
Industry: Healthcare and pharmaceutical
```

**Common Uses:**
- **Enhanced medication tracking**: More detailed medication information
- **Pharmaceutical packaging**: Complex medication packaging
- **Healthcare systems**: Advanced medication management

---

### 📮 Telepen Alpha

**Definition:** Telepen Alpha is a linear barcode used primarily in library systems for book and media identification.

**What it is:** Telepen Alpha is a specialized barcode designed for library applications, particularly for book identification and circulation management.

**Key Features:**
- **Library specific**: Designed for library systems
- **Alphanumeric**: Can encode letters and numbers
- **Variable length**: No fixed length requirement
- **Check digit**: Built-in error detection

**Technical Details:**
```
Characters: A-Z, 0-9
Purpose: Library identification
Industry: Libraries and media management
```

**Common Uses:**
- **Library systems**: Book and media identification
- **Media management**: CD, DVD, and other media tracking
- **Circulation**: Library circulation and inventory management

---

## 📮 Postal Codes

### 📬 GS1 DataBar

**Definition:** GS1 DataBar is a family of barcodes designed for small items and variable data applications.

**What it is:** GS1 DataBar is a compact barcode family that can encode various types of data in a small space, making it ideal for small products and applications with limited space.

**Key Features:**
- **Compact size**: Designed for small items
- **Multiple variants**: Different formats for different needs
- **Variable data**: Can encode various types of information
- **GS1 standard**: Part of the GS1 system

**Technical Details:**
```
Variants: DataBar-14, DataBar Limited, DataBar Expanded
Size: Compact for small items
Data: Variable length and type
```

**Common Uses:**
- **Small products**: Items with limited space for barcodes
- **Variable data**: Applications requiring different data types
- **Retail**: Product identification for small items

---

### 🛒 EAN / UPC

**Definition:** EAN (European Article Number) and UPC (Universal Product Code) are the most common retail barcodes used worldwide.

**What it is:** EAN and UPC are the standard barcodes used in retail for product identification. UPC is used primarily in North America, while EAN is used internationally.

**Key Features:**
- **Retail standard**: Most common retail barcodes
- **Global usage**: Used worldwide for product identification
- **Fixed length**: Standardized length for consistency
- **Check digit**: Built-in error detection
- **Human readable**: Includes human-readable numbers below

**Technical Details:**
```
UPC-A: 12 digits (North America)
UPC-E: 6 digits (compressed UPC-A)
EAN-13: 13 digits (International)
EAN-8: 8 digits (compressed EAN-13)
Check Digit: Modulo 10
```

**Common Uses:**
- **Retail**: Product identification and pricing
- **Point of sale**: Cash register and checkout systems
- **Inventory**: Stock management and tracking
- **Supply chain**: Product tracking throughout supply chain

**Example:**
```
UPC-A: 123456789012
EAN-13: 1234567890123
Human Readable: 1 23456 78901 2
```

---

## 📱 2D Codes

### 🔲 GS1 2D Barcodes

**Definition:** GS1 2D Barcodes are two-dimensional barcodes that can encode large amounts of data in a compact space.

**What it is:** GS1 2D Barcodes use two-dimensional patterns to encode data, allowing for much more information than linear barcodes in a smaller space.

**Key Features:**
- **High capacity**: Can encode large amounts of data
- **Compact size**: More data in less space
- **Error correction**: Built-in error correction capabilities
- **GS1 standard**: Part of the GS1 system

**Technical Details:**
```
Format: Two-dimensional matrix or stacked format
Capacity: Much higher than linear barcodes
Error Correction: Built-in error correction
```

**Common Uses:**
- **High-capacity applications**: Where large amounts of data are needed
- **Space-constrained**: Where linear barcodes are too large
- **Complex data**: Applications requiring multiple data types

---

### 💳 Banking and Payments

**Definition:** Banking and payment barcodes are specialized codes used for financial transactions and payment processing.

**What it is:** These barcodes are designed specifically for banking and payment applications, enabling secure and efficient financial transactions.

**Key Features:**
- **Financial specific**: Designed for banking and payments
- **Security**: Built-in security features
- **Transaction data**: Encodes payment and transaction information
- **Standards compliance**: Follows financial industry standards

**Technical Details:**
```
Purpose: Financial transactions and payments
Security: Enhanced security features
Standards: Financial industry standards
```

**Common Uses:**
- **Payment processing**: Credit card and payment transactions
- **Banking**: Account identification and transactions
- **Financial services**: Various financial applications

---

### 📱 Mobile Tagging

**Definition:** Mobile tagging barcodes are designed to be scanned by mobile devices and can contain various types of information.

**What it is:** Mobile tagging barcodes are optimized for mobile device scanning and can contain URLs, contact information, or other data that mobile devices can process.

**Key Features:**
- **Mobile optimized**: Designed for mobile device scanning
- **Various data types**: Can contain URLs, contacts, text, etc.
- **Easy scanning**: Optimized for mobile camera scanning
- **Interactive**: Can trigger actions on mobile devices

**Technical Details:**
```
Format: Various 2D barcode formats
Data Types: URLs, contacts, text, etc.
Optimization: Mobile device scanning
```

**Common Uses:**
- **Marketing**: Advertising and promotional campaigns
- **Information sharing**: Quick access to information
- **Mobile apps**: App downloads and information
- **Social media**: Sharing and connecting

---

### 🏥 Healthcare Codes

**Definition:** Healthcare barcodes are specialized codes used in healthcare for patient identification, medication tracking, and medical device identification.

**What it is:** Healthcare barcodes are designed specifically for healthcare applications, ensuring patient safety and accurate medication and device identification.

**Key Features:**
- **Healthcare specific**: Designed for healthcare applications
- **Patient safety**: Focus on patient safety and accuracy
- **Regulatory compliance**: Meets healthcare regulations
- **Error prevention**: Built-in error detection and prevention

**Technical Details:**
```
Purpose: Healthcare identification and tracking
Standards: Healthcare industry standards
Compliance: Regulatory compliance requirements
```

**Common Uses:**
- **Patient identification**: Patient ID and medical records
- **Medication tracking**: Drug identification and tracking
- **Medical devices**: Device identification and tracking
- **Laboratory**: Sample and test identification

---

### 📚 ISBN Codes

**Definition:** ISBN (International Standard Book Number) barcodes are used for book identification and are based on EAN-13 format.

**What it is:** ISBN barcodes are specialized EAN-13 barcodes that encode the International Standard Book Number, used for book identification worldwide.

**Key Features:**
- **Book specific**: Designed for book identification
- **International standard**: Used worldwide for books
- **EAN-13 based**: Uses EAN-13 barcode format
- **Publisher information**: Encodes publisher and book information

**Technical Details:**
```
Format: EAN-13 with ISBN prefix
Prefix: 978 or 979 for ISBN
Length: 13 digits total
```

**Common Uses:**
- **Book identification**: Book identification and cataloging
- **Library systems**: Library cataloging and management
- **Publishing**: Book publishing and distribution
- **Retail**: Book retail and sales

**Example:**
```
ISBN: 978-0-123456-78-9
EAN-13: 9780123456789
```

---

### 💼 Business Cards

**Definition:** Business card barcodes can encode contact information, URLs, or other business-related data.

**What it is:** Business card barcodes are designed to encode contact information and other business data that can be quickly scanned and imported into mobile devices.

**Key Features:**
- **Contact information**: Encodes name, phone, email, etc.
- **Quick import**: Easy import into mobile devices
- **Professional**: Professional appearance on business cards
- **Versatile**: Can include various types of information

**Technical Details:**
```
Format: Various 2D barcode formats
Data: Contact information, URLs, etc.
Purpose: Business card information
```

**Common Uses:**
- **Business cards**: Professional contact information
- **Networking**: Quick contact exchange
- **Marketing**: Business promotion and contact
- **Professional**: Professional networking and communication

---

### 🎉 Event Barcodes

**Definition:** Event barcodes are used for event tickets, registration, and access control.

**What it is:** Event barcodes are designed for event management, including tickets, registration, and access control for events and venues.

**Key Features:**
- **Event specific**: Designed for event management
- **Access control**: Can control access to events
- **Ticket validation**: Validate event tickets
- **Registration**: Event registration and check-in

**Technical Details:**
```
Purpose: Event management and access control
Data: Event information, ticket data, etc.
Security: Access control and validation
```

**Common Uses:**
- **Event tickets**: Concert, sports, and event tickets
- **Access control**: Event access and security
- **Registration**: Event registration and check-in
- **Venue management**: Venue access and management

---

### 📶 Wi-Fi Barcodes

**Definition:** Wi-Fi barcodes can encode Wi-Fi network information, allowing devices to quickly connect to networks.

**What it is:** Wi-Fi barcodes encode Wi-Fi network credentials and settings, allowing devices to quickly and easily connect to Wi-Fi networks by scanning the barcode.

**Key Features:**
- **Wi-Fi credentials**: Encodes network name and password
- **Quick connection**: Easy Wi-Fi network connection
- **Security**: Can include security settings
- **Convenience**: No need to manually enter credentials

**Technical Details:**
```
Format: Various 2D barcode formats
Data: SSID, password, security type, etc.
Purpose: Wi-Fi network connection
```

**Common Uses:**
- **Public Wi-Fi**: Easy access to public networks
- **Guest networks**: Quick guest network access
- **Business**: Business Wi-Fi access
- **Events**: Event Wi-Fi access

**Example:**
```
Wi-Fi Data: WIFI:T:WPA;S:MyNetwork;P:MyPassword;H:false;;
QR Code: [QR Code containing Wi-Fi data]
```

---

## 📚 Quick Reference

### **Barcode Type Comparison**

| Type | Characters | Length | Use Case | Industry |
|------|------------|--------|----------|----------|
| **Code-128** | Full ASCII | Variable | Shipping, Inventory | Logistics |
| **Code-11** | 0-9, - | Variable | Telecommunications | Telecom |
| **Code-2of5** | 0-9 | Even | Retail, Logistics | Retail |
| **Code-39** | A-Z, 0-9, 7 special | Variable | Industrial, Government | Industrial |
| **Code-93** | Full ASCII | Variable | High-density | Various |
| **GS1-128** | Multiple AIs | Variable | Supply Chain | Logistics |
| **MSI** | 0-9 | Variable | Retail, Inventory | Retail |
| **EAN/UPC** | 0-9 | Fixed | Retail | Retail |
| **ISBN** | 0-9 | 13 digits | Books | Publishing |
| **QR Code** | Full ASCII | Variable | Mobile, Marketing | Various |

### **2D Code Types**

| Type | Capacity | Use Case | Industry |
|------|----------|----------|----------|
| **QR Code** | High | Mobile, Marketing | Various |
| **Data Matrix** | Medium | Small items | Industrial |
| **PDF417** | Very High | Government, ID | Government |
| **Aztec** | High | Transportation | Transportation |
| **MaxiCode** | Medium | Shipping | Logistics |

### **Industry Applications**

**Retail:**
- EAN/UPC for product identification
- Code-128 for inventory management
- QR codes for mobile marketing

**Healthcare:**
- Code-128 for patient identification
- Pharmacode for medication tracking
- QR codes for medical information

**Logistics:**
- GS1-128 for supply chain tracking
- Code-128 for shipping labels
- MaxiCode for package sorting

**Government:**
- Code-39 for government identification
- PDF417 for driver's licenses
- QR codes for government services

**Manufacturing:**
- Code-128 for part identification
- Data Matrix for small components
- QR codes for quality control

### **Choosing the Right Barcode**

**For Retail Products:**
- Use EAN/UPC for standard retail products
- Use GS1 DataBar for small items
- Use QR codes for additional product information

**For Inventory Management:**
- Use Code-128 for general inventory
- Use GS1-128 for supply chain tracking
- Use Data Matrix for small parts

**For Mobile Applications:**
- Use QR codes for mobile scanning
- Use Data Matrix for small mobile items
- Use PDF417 for high-capacity mobile data

**For Healthcare:**
- Use Code-128 for patient identification
- Use Pharmacode for medication tracking
- Use QR codes for medical information

**For Government:**
- Use Code-39 for government identification
- Use PDF417 for high-capacity data
- Use QR codes for government services

---

*Last Updated: 2025*
*This comprehensive guide covers all major barcode and QR code types, helping you choose the right format for your specific needs.*
