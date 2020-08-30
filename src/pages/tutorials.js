import React from "react";
import Layout from "../components/layout";
import {graphql, useStaticQuery} from "gatsby";

const Tutorials = () => {
    return (
        <Layout>
            <h2>Tutorial/User Instructions</h2>
            <h3>Object Recognition Software (ORS)</h3>
            <pre><code>                       Tutorial/<span class="hljs-keyword">User</span> <span class="hljs-title">Instructions</span>

Object Recognition Software (ORS)
</code></pre><p><strong>About ORS:</strong></p>
<p><em>Object recognition software</em> enables computers to identify and process images in a way similar to human vision. For e.g. a person, a chair, bicycle, etc.</p>
<p>Software is built on the YOLOv3 prediction model and programs are written in Python.</p>
<p>This tutorial aims to assist the users of this software with respect to the installation and usage of the software</p>
<p><strong>Prerequisites:</strong></p>
<ol>
<li>Operating System: Windows or Linux</li>
<li>Minimum Disk space: 1000 Mb</li>
<li>Connect a web camera and/or make sure it has the security permission from the operating system.</li>
</ol>
<p>Go to Windows Setting-\&gt; Security -\&gt; Camera -\&gt; Allow desktop apps to access the camera.</p>
<p><strong>Installation:</strong></p>
<ol>
<li>The application file and the supporting documentation files can be downloaded from a GitHub repository.</li>
<li>Click on the below-mentioned link and visit GitHub repository to download the <em>Setup.exe</em> file.</li>
</ol>
<p>Visit <a href="https://robotics.hochschule-rhein-waal.de/gitlab/PSD/sose-2020-group-b.git">https://robotics.hochschule-rhein-waal.de/gitlab/PSD/sose-2020-group-b.git</a></p>
<ol>
<li>Users can also find a link to the GitHub repository on our website below.</li>
</ol>
<p>Visit <a href="https://romantic-euler-a3b063.netlify.app/">https://romantic-euler-a3b063.netlify.app/</a></p>
<p>Double click on the downloaded <em>Setup.exe</em> file to run it on your computer. An installation window will appear (See Fig1).</p>
<p><img src="images2\install.jpg" alt="install" width="520" height="350"/></p>
<pre><code>           Fig1. Starting Installation
</code></pre><p>Then click on <em>YES</em>.</p>
<p>Once clicked on <em>YES</em>, an installation window as below will appear (See Fig2).</p>
<p><img src="images2\install1.png" alt="install1" width="520"/></p>
<pre><code>            Fig2. Installation <span class="hljs-built_in">Window</span>
</code></pre><ol>
<li><p>Chose the desired destination for installation and then click on <em>Install</em>.</p>
</li>
<li><p>Now the installation will start and this will take only a few seconds to complete.</p>
</li>
<li><p>As the installation is in progress you can see a folder named <em>Image Recognition</em> created at the desired destination on the disk. </p>
<p>   All the files are extracted to this folder (See Fig3).</p>
</li>
</ol>
<p><img src="images2\instprog.jpg" alt="instprog" width="720" height="400"/></p>
<pre><code>               Fig3. <span class="hljs-keyword">Installation </span>complete
</code></pre><ol>
<li>Close the installation window when finished.</li>
<li>Open the folder named <em>Image Recognition.</em> Inside ths folder, you will find the application file and all supporting documentation.</li>
<li>Click on the application file named &quot;<em>ImageRecognition&quot;</em> to open the user interface of the Software. (See Fig4).</li>
</ol>
<p><img src="images2\runapp.jpg" alt="runapp" width="720" height="400"/></p>
<pre><code>           Fig4<span class="hljs-selector-class">.Application</span> file location
</code></pre><p>Now you are ready to use the ORS Software.</p>
<p><strong>Usage:</strong></p>
<ol>
<li><p>When clicked on the <em>ImageRecognition</em>.<em>exe</em> file, the Object Recognition window opens. Its 800 x 600 in size by default but the resolution can be altered by clicking on the edge and dragging action. User interface of ORS looks like below (See Fig5).</p>
</li>
<li><p>The GUI of the image recognition software consists of a Main Window, a menu bar, a toolbar, a status bar, and basic elements, referred to as widgets which are located in a central widget. In this case, the elements are actions, labels, and a slider. The GUI has seven actions and three group actions in total. These are displayed in the menu bar and the toolbar.</p>
</li>
</ol>
<p><img src="images2\main_window.jpg" alt="main_window" width="720" height="400"/></p>
<pre><code>                        Fig5. Main <span class="hljs-built_in">Window</span>
</code></pre><p><strong>1. Menu bar:</strong></p>
<p>It provides 3 menus- File, Edit &amp; Help.</p>
<ol>
<li>File Menu: It provides 3 actions: New, Open &amp; Save.</li>
<li>Edit Menu: It provides 4 actions: Process, Remove, Camera &amp; Edit font Size.</li>
<li>Help Menu: It provides Get help action</li>
</ol>
<p>All these actions are also displayed in the toolbar.</p>
<p><strong>2. Toolbar:</strong></p>
<p>It provides 7 tools: New, Open, Save, Process, Remove, Camera, Get help</p>
<p><strong>3. Confidence level settings:</strong></p>
<p>Below the toolbar, three labels can be seen in a horizontal layout. They display the text &quot;Confidence level&quot;; &quot;50&quot; and &quot;%&quot;. The middle one (&quot;50&quot;) is dependent on the values that the slider takes. It varies as the slider varies. The slider is located just below, and takes values from 0 to 100 with unitary steps. The slider sets the lowest confidence value acceptable to the user.</p>
<p><strong>4. Workspace:</strong></p>
<p>A big white label below confidence level button is referred to as &quot;Working space&quot;. In this label images and the web camera&#39;s footage are displayed.</p>
<p><strong>5.</strong> Minimize, Restore down &amp; Close Button** are in upper right corner of the application window, which is self-explanatory.</p>
<p>By using the above-mentioned menus, actions and labels following activities can be carried out.</p>
<ul>
<li><strong>Creating clean (blank) workspace:</strong></li>
</ul>
<p>To reset or to create a clean new workspace Click on <em>File-\&gt;New</em> in the Menu bar or Click on the button &quot;<em>New</em>&quot; in the toolbar or press <em>Ctrl+N</em> on the keyboard (See Fig6). This action is useful when there is an image already loaded and you want to remove it from the workspace.</p>
<p>This action deletes any temporary file created by the &quot;Process&quot; action and disables the &quot;Remove&quot; action.</p>
<p><img src="images2\filemenu.jpg" alt="filemenu" width="720" height="400"/></p>
<pre><code>                     Fig6. Creating <span class="hljs-keyword">a</span> <span class="hljs-built_in">new</span> workspace
</code></pre><ul>
<li><strong>Loading</strong>  <strong>a new Image:</strong></li>
</ul>
<p>A new image can be loaded by opening an &quot;Open File&quot; dialog (See Fig.7).</p>
<p><img src="images2\open.jpg" alt="open" width="820" height="500"/></p>
<pre><code>                 Fig<span class="hljs-number">.7</span> loading <span class="hljs-keyword">a</span> <span class="hljs-built_in">new</span> Image <span class="hljs-keyword">into</span> workspace
</code></pre><ol>
<li>Click on File-\&gt;Open in menu bar or click on &quot;Open tool&quot; in tool bar or press Ctrl+O to open the dialog.</li>
<li>Then search for an image file on your disk to load it. Accepted formats are - .jpg, .png &amp; bmp.</li>
<li><p>Once the image file is loaded, it gets displayed in the workspace. Image is automatically resized to fit the space. Only one image at a time is allowed in the working space.</p>
</li>
<li><p><strong>Processing the Images</strong></p>
</li>
</ol>
<p>When an image is loaded it can be processed to detect the objects in it.</p>
<ol>
<li>Click on the <em>Edit-\&gt;Process</em> in Menu bar or Click on the <em>Process</em> button in tool bar or press <em>F5</em> to process the image.</li>
<li><strong>Multiple objects</strong> in the image are simultaneously detected and the names of the objects are highlighted along with the accuracy level (confidence level) of detection on the rectangular frames around the objects (See Fig8).</li>
<li>The confidence level of detection can be customized by changing the settings in the label confidence level. In fig9, it is set to 50%, so only the objects detected with accuracy equal to or more than 50% are shown and highlighted.</li>
</ol>
<p><img src="images2\processed_image.jpg" alt="processed_image" width="820" height="500"/></p>
<pre><code>                        Fi<span class="hljs-name">g8.</span> Processed Image
</code></pre><ul>
<li><strong>Font size of the text</strong> on detected squares can be changed by going to <em>edit menu-\&gt;Edit font size</em>. There are three sizes, Small, Medium, and Big. The Medium size is the default one (See Fig.9).</li>
</ul>
<p><img src="images2\fontsize.jpg" alt="fontsize" width="720" height="350"/></p>
<pre><code>                Fig9. Changing Font size <span class="hljs-keyword">label</span><span class="bash"></span>
</code></pre><ul>
<li><p><strong>Using Web camera:</strong></p>
</li>
<li><p>ORS also recognizes the real-time video feed through the web camera.</p>
</li>
<li>The camera can be opened by clicking on Edit menu-\&gt;Camera or Camera tool in tool bar or pressing Ctrl+W.</li>
<li><p>This function works on a checkable action mode. When clicked on, it turns on the web camera and displays the object detected and the level of confidence on its side. When the user unchecks it, the webcam is turned off and the working space is cleared.</p>
</li>
<li><p><strong>Saving the File:</strong></p>
</li>
</ul>
<p>the processed image file can be saved to the local disk on user&#39;s computer.</p>
<p>Click on <em>File</em> menu<em>-\&gt;Save</em> or click on <em>Save</em> button in toolbar or press <em>Ctrl+S</em> to open a &quot;Save File&quot; dialog, which allows to save whatever is on the working space as an image.</p>
<p>If the user does not specify any extension, the image is stored as .jpg file.</p>
<ul>
<li><strong>Removing the Recognition:</strong></li>
</ul>
<p>Sometimes user wants to change the confidence level for detection and do the detection once again. In that case, the current recognition of the image can be removed by clicking on the Edit menu-\&gt; Remove or Remove button from tool bar or by pressing Ctrl+R.</p>
<ul>
<li><strong>Getting Help</strong> :</li>
</ul>
<p>By clicking on <em>Help menu-\&gt;Get help</em> or <em>Help</em> icon on tool bar or by pressing <em>Ctrl+H,</em> user can visit the help manual or contact the developers of this ORS software.</p>
<p>Get Help: <a href="https://romantic-euler-a3b063.netlify.app">https://romantic-euler-a3b063.netlify.app</a></p>
<ul>
<li><strong>Closing the application</strong> :</li>
</ul>
<p>Application main window can be closed by clicking on the Close button in right up corner.</p>
<p><em> <strong>Warning:</strong> </em> Sometimes, if the camera is on when closing the application, it gives an error when opening again (is like &quot;The camera is being used by other app&quot;) and then you can only restart the PC to close the camera. Therefore it is recommended to close the camera before closing the application.</p>
<ul>
<li><strong>Contact us</strong> on</li>
</ul>
<p><a href="https://romantic-euler-a3b063.netlify.app/contact">https://romantic-euler-a3b063.netlify.app/contact</a></p>


        </Layout>
    )
}

export default Tutorials;
