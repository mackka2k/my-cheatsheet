### HELLO WORLD :ghost:

```csharp
// C# code for displaying "Hello, World!" in a Windows Forms application
using System;
using System.Windows.Forms;

class HelloWorldForm : Form
{
    public HelloWorldForm()
    {
        Text = "Hello, World!";
    }

    public static void Main()
    {
        Application.Run(new HelloWorldForm());
    }
}
```

### CREATING CONTROLS

```csharp
// C# code for creating controls in WinForms application
Button button1 = new Button();
button1.Text = "Click Me!";
button1.Location = new Point(100, 100);
button1.Click += new EventHandler(button1_Click);
Controls.Add(button1);

void button1_Click(object sender, EventArgs e)
{
    MessageBox.Show("Button Clicked!");
}```

### EVENT HANDLING

```csharp
// C# code for handling events in WinForms application
private void button1_Click(object sender, EventArgs e)
{
    MessageBox.Show("Button Clicked!");
}
```

### LAYOUT MANAGEMENT
```csharp
// C# code for layout management in WinForms application
FlowLayoutPanel flowLayoutPanel1 = new FlowLayoutPanel();
flowLayoutPanel1.FlowDirection = FlowDirection.TopDown;
flowLayoutPanel1.Controls.Add(button1);
flowLayoutPanel1.Controls.Add(button2);
Controls.Add(flowLayoutPanel1);
```


### WORKING WITH FORMS

```csharp
// C# code for working with forms in WinForms application
Form secondForm = new Form();
secondForm.Text = "Second Form";
secondForm.Show();
```

### DATA BINDING

```csharp
// C# code for data binding in WinForms application
DataTable dataTable = new DataTable();
dataGridView1.DataSource = dataTable;
```


### WORKING WITH CONTROLS
```csharp
// C# code for working with controls in WinForms application
textBox1.Text = "Hello, World!";
label1.Text = "Welcome!";

```

### MESSAGEBOX
```csharp
// C# code for using MessageBox in WinForms application
MessageBox.Show("Hello, World!");
````

### FILE DIALOGS
```csharp
// C# code for using File Dialogs in WinForms application
OpenFileDialog openFileDialog1 = new OpenFileDialog();
if (openFileDialog1.ShowDialog() == DialogResult.OK)
{
    // Do something with the selected file
}

```

### ERROR HANDLING
```csharp
// C# code for error handling in WinForms application
try
{
    // Code that may throw an exception
}
catch (Exception ex)
{
    MessageBox.Show("An error occurred: " + ex.Message);
}
```



### WORKING WITH MENUS

```csharp
// C# code for working with menus in WinForms application
ToolStripMenuItem menuItem1 = new ToolStripMenuItem("File");
ToolStripMenuItem subMenuItem1 = new ToolStripMenuItem("Open");
menuItem1.DropDownItems.Add(subMenuItem1);
menuStrip1.Items.Add(menuItem1);
```


### WORKING WITH DIALOG BOXES

```csharp
// C# code for using dialog boxes in WinForms application
ColorDialog colorDialog1 = new ColorDialog();
if (colorDialog1.ShowDialog() == DialogResult.OK)
{
    // Use selected color
}
```
### CUSTOM DRAWING

```csharp
// C# code for custom drawing in WinForms application
protected override void OnPaint(PaintEventArgs e)
{
    base.OnPaint(e);
    Graphics g = e.Graphics;
    Pen pen = new Pen(Color.Red);
    g.DrawLine(pen, 10, 10, 100, 100);
}
```

### TOOLTIPS

```csharp
// C# code for using tooltips in WinForms application
ToolTip toolTip1 = new ToolTip();
toolTip1.SetToolTip(button1, "Click this button!");

```

### TIMERS

```csharp
// C# code for using timers in WinForms application
Timer timer1 = new Timer();
timer1.Interval = 1000; // 1 second
timer1.Tick += new EventHandler(timer1_Tick);
timer1.Start();

void timer1_Tick(object sender, EventArgs e)
{
    // Timer tick event handler
}
```
