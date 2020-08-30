---
title: "Getting Started"
date: "29-08-2020"
---

                           Tutorial/User Instructions

                         Object Recognition Software (ORS)

**About ORS:**

_Object recognition software_ enables computers to identify and process images in a way similar to human vision. For e.g. a person, a chair, bicycle, etc.

Software is built on the YOLOv3 prediction model and programs are written in Python.

This tutorial aims to assist the users of this software with respect to the installation and usage of the software

**Prerequisites:**

1. Operating System: Windows or Linux
2. Minimum Disk space: 1000 Mb
3. Connect a web camera and/or make sure it has the security permission from the operating system.

Go to Windows Setting-\&gt; Security -\&gt; Camera -\&gt; Allow desktop apps to access the camera.

**Installation:**

1. The application file and the supporting documentation files can be downloaded from a GitHub repository.
2. Click on the below-mentioned link and visit GitHub repository to download the _Setup.exe_ file.

Visit https://robotics.hochschule-rhein-waal.de/gitlab/PSD/sose-2020-group-b.git

1. Users can also find a link to the GitHub repository on our website below.

Visit [https://romantic-euler-a3b063.netlify.app/](https://romantic-euler-a3b063.netlify.app/)

Double click on the downloaded _Setup.exe_ file to run it on your computer. An installation window will appear (See Fig1).


<img src="images2\install.jpg" alt="install" width="520" height="350"/>
                
               Fig1. Starting Installation

Then click on _YES_.

Once clicked on _YES_, an installation window as below will appear (See Fig2).

<img src="images2\install1.png" alt="install1" width="520"/>

                Fig2. Installation Window


1. Chose the desired destination for installation and then click on _Install_.

2. Now the installation will start and this will take only a few seconds to complete.

3. As the installation is in progress you can see a folder named _Image Recognition_ created at the desired destination on the disk. 
  
      All the files are extracted to this folder (See Fig3).

<img src="images2\instprog.jpg" alt="instprog" width="720" height="400"/>

                   Fig3. Installation complete

1. Close the installation window when finished.
2. Open the folder named _Image Recognition._ Inside ths folder, you will find the application file and all supporting documentation.
3. Click on the application file named &quot;_ImageRecognition&quot;_ to open the user interface of the Software. (See Fig4).

<img src="images2\runapp.jpg" alt="runapp" width="720" height="400"/>

               Fig4.Application file location

Now you are ready to use the ORS Software.

**Usage:**

1. When clicked on the _ImageRecognition_._exe_ file, the Object Recognition window opens. Its 800 x 600 in size by default but the resolution can be altered by clicking on the edge and dragging action. User interface of ORS looks like below (See Fig5).

2. The GUI of the image recognition software consists of a Main Window, a menu bar, a toolbar, a status bar, and basic elements, referred to as widgets which are located in a central widget. In this case, the elements are actions, labels, and a slider. The GUI has seven actions and three group actions in total. These are displayed in the menu bar and the toolbar.

<img src="images2\main_window.jpg" alt="main_window" width="720" height="400"/>

                            Fig5. Main Window

**1. Menu bar:**

It provides 3 menus- File, Edit &amp; Help.

1. File Menu: It provides 3 actions: New, Open &amp; Save.
2. Edit Menu: It provides 4 actions: Process, Remove, Camera &amp; Edit font Size.
3. Help Menu: It provides Get help action

All these actions are also displayed in the toolbar.

**2. Toolbar:**

It provides 7 tools: New, Open, Save, Process, Remove, Camera, Get help

**3. Confidence level settings:**

Below the toolbar, three labels can be seen in a horizontal layout. They display the text &quot;Confidence level&quot;; &quot;50&quot; and &quot;%&quot;. The middle one (&quot;50&quot;) is dependent on the values that the slider takes. It varies as the slider varies. The slider is located just below, and takes values from 0 to 100 with unitary steps. The slider sets the lowest confidence value acceptable to the user.

**4. Workspace:**

A big white label below confidence level button is referred to as &quot;Working space&quot;. In this label images and the web camera&#39;s footage are displayed.

**5.** Minimize, Restore down &amp; Close Button** are in upper right corner of the application window, which is self-explanatory.


By using the above-mentioned menus, actions and labels following activities can be carried out.


+ **Creating clean (blank) workspace:**

To reset or to create a clean new workspace Click on _File-\&gt;New_ in the Menu bar or Click on the button &quot;_New_&quot; in the toolbar or press _Ctrl+N_ on the keyboard (See Fig6). This action is useful when there is an image already loaded and you want to remove it from the workspace.

This action deletes any temporary file created by the &quot;Process&quot; action and disables the &quot;Remove&quot; action.

<img src="images2\filemenu.jpg" alt="filemenu" width="720" height="400"/>

                         Fig6. Creating a new workspace

+ **Loading**  **a new Image:**

A new image can be loaded by opening an &quot;Open File&quot; dialog (See Fig.7).

<img src="images2\open.jpg" alt="open" width="820" height="500"/>

                     Fig.7 loading a new Image into workspace

1. Click on File-\&gt;Open in menu bar or click on &quot;Open tool&quot; in tool bar or press Ctrl+O to open the dialog.
2. Then search for an image file on your disk to load it. Accepted formats are - .jpg, .png &amp; bmp.
3. Once the image file is loaded, it gets displayed in the workspace. Image is automatically resized to fit the space. Only one image at a time is allowed in the working space.

+ **Processing the Images**

When an image is loaded it can be processed to detect the objects in it.

1. Click on the _Edit-\&gt;Process_ in Menu bar or Click on the _Process_ button in tool bar or press _F5_ to process the image.
2. **Multiple objects** in the image are simultaneously detected and the names of the objects are highlighted along with the accuracy level (confidence level) of detection on the rectangular frames around the objects (See Fig8).
3. The confidence level of detection can be customized by changing the settings in the label confidence level. In fig9, it is set to 50%, so only the objects detected with accuracy equal to or more than 50% are shown and highlighted.

<img src="images2\processed_image.jpg" alt="processed_image" width="820" height="500"/>

                            Fig8. Processed Image

+  **Font size of the text** on detected squares can be changed by going to _edit menu-\&gt;Edit font size_. There are three sizes, Small, Medium, and Big. The Medium size is the default one (See Fig.9).

<img src="images2\fontsize.jpg" alt="fontsize" width="720" height="350"/>

                    Fig9. Changing Font size label

+ **Using Web camera:**

1. ORS also recognizes the real-time video feed through the web camera.
2. The camera can be opened by clicking on Edit menu-\&gt;Camera or Camera tool in tool bar or pressing Ctrl+W.
3. This function works on a checkable action mode. When clicked on, it turns on the web camera and displays the object detected and the level of confidence on its side. When the user unchecks it, the webcam is turned off and the working space is cleared.

+ **Saving the File:**

the processed image file can be saved to the local disk on user&#39;s computer.

Click on _File_ menu_-\&gt;Save_ or click on _Save_ button in toolbar or press _Ctrl+S_ to open a &quot;Save File&quot; dialog, which allows to save whatever is on the working space as an image.

If the user does not specify any extension, the image is stored as .jpg file.

+ **Removing the Recognition:**

Sometimes user wants to change the confidence level for detection and do the detection once again. In that case, the current recognition of the image can be removed by clicking on the Edit menu-\&gt; Remove or Remove button from tool bar or by pressing Ctrl+R.

+ **Getting Help** :

By clicking on _Help menu-\&gt;Get help_ or _Help_ icon on tool bar or by pressing _Ctrl+H,_ user can visit the help manual or contact the developers of this ORS software.

Get Help: https://romantic-euler-a3b063.netlify.app

+ **Closing the application** :

Application main window can be closed by clicking on the Close button in right up corner.

_ **Warning:** _ Sometimes, if the camera is on when closing the application, it gives an error when opening again (is like &quot;The camera is being used by other app&quot;) and then you can only restart the PC to close the camera. Therefore it is recommended to close the camera before closing the application.

+ **Contact us** on

[https://romantic-euler-a3b063.netlify.app/contact](https://romantic-euler-a3b063.netlify.app/contact)