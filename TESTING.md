<br>
Testing<br>

felsök med att kommentera ut script + console.log

bug
- start.eventlistener did not work. wrong attribute. Change from class to id to match script.
- onclick in html - wanted script in js. found right anwser in js script with help of https://stackoverflow.com/questions/41410958/open-a-new-html-page-in-a-js-function-and-then-write-some-html-on-it
- error messages when changing html file, missing elements error in js. had to spit js-files.

# **Testing**

1. [Manual testing](#manual-testing)
    - Responsive Design Checker
    - DevTools
    - Am I responsive?
    - BrowserStack
2. [Code validation](#code-validation)
    - W3Schools
        - HTML
        - CSS
    - Lighthouse
    - WAVE
3. [Bugs and fixes](#bugs-and-fixes)

---

### **Manual testing**

During the entire developing stage I repeatedly tested the elements added and altered regarding appearance as well as responsiveness via the simulated live server GitPod provides. After the site was live deployed I also checked the site regularly trough my smartphone for first hand updates on a live mobile viewport. My friends that tested the game on diffrent mobiles and desktop viewport also rapported that they found the game working well.

<br>

- [Responsive Design Checker](https://responsivedesignchecker.com)
- [DevTools](https://developer.chrome.com/docs/devtools/)

In combination with the direct visual view of the page provided by the live server I frequently used Google Chrome developer tools, both for direct changes of the code as well as the tools for responsive testing of different platforms and screen sizes. As a compliment to DevTools I also checked how the website responded on diffrent screen sizes and screen orientaion using Responsive Design Checker. The final version of website passed all the visual and functional apperences changes on both large and small screens.

<br>

- [Am I responsive?](http://ami.responsivedesign.is/)

To get a second opinion of how the site worked in regard to different screen sizes, I checked the result at "Am I Responsive?" The result is shown as a screenshot at the [introduction](./README.md) of the project.

<br>

- [Browserstack](https://browserstack.com)

The websites compatability to various browsers (Chrome, Safari, Opera, Firefox, Internet Explorer, Edge) including diffrent versions of said browsers, was tested using the BrowserStack application on both desktop and mobile. Diffrent mobile versions was tested also for diffrent browsers. Over all the appearance, functionality and responsiveness were consistent throughout for most of the devices and browsers. No notable diffrence in apperence was found.

<br>

[Back to top](#testing)

---

### **Code validation**
<br>

- [HTML and CSS Validation](https://www.w3schools.com/) 

When the basic structure of the project was done I ran code validation through W3Schools Validator for all the HTML files as well as the CSS file. This procedure was repeated multiple times to validate that the code was working during the developing process. Nothing was found during CSS testing but a few small error occured during HTML testing. One aspect was not fixed (see screenshot below) since the picture element in the HTML file is a script-supporting element for the quiz flags in the javascript files.
<br>

- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

I also ran the page through Lighthouse for both desktop and mobile to test out the performance and accessibility of the page. The input gave me further information how to proceed with the project; for exampel to minimize image files and minify javascript. I didn't do it as extensive as lighthouse suggested though since I was not sure how the WEBP file would work instead of the PNG file. Instead I compressed the PNG files (see **Content** section on previous page). I tried the minimizing tool for javascript that Lighthouse suggested but didn't accept the much compressed script it suggested. Instead I minimazed the white spaces in the question.js file as much as I could while still leaving the script readable. The process with Lighthouse was repeated after all major changes and bug fixes. The final result is shown below:
<br>
<br>

**W3School**

HTML<br>
There was a small problem in the index file that was easily

<img src="assets/image/readme/html-quiz-1.png" width=650> <img src="assets/image/readme/html-quiz-partly.png" width=650>

<br>

CSS
<br>

<img src="assets/image/readme/css.png" width=650>

<br>
<br>

**Lighthouse** 

<img src="assets/image/readme/desktop-start-final.png" width=650> <img src="assets/image/readme/desktop-quiz-final.png" width=650> <img src="assets/image/readme/seo-desktop-quiz-final.png" width=650> 
<br>
Desktop: Start page, quiz page and SEO comment for quiz page. <br>
(The best practice had input about the image size not being scaled down correctly, an issue mot changed since the diffrent flag files have diffrent sizes and I ewanted the same size on all the flags displayed in the quiz.)
<br>
<br>

<img src="assets/image/readme/mobile-start-final-validation.png" width=650> 
<br>
(The mobile performance  was sometimes lower but lighthouse then calculated on the larger image that isn't in use on mobile or tablet viewports due to media queries. The inspect element section of DevTools shows the correct smaller size being used but the lighthouse test runs the medium size picture anyway. BEst practice score is lower of the same reason as for the desktop: wrong image ratio.)
<br>
<br>

- [WAVE](https://wave.webaim.org/)

To validate the accessibility further I also tested the site at Wave - Web Accessibility Evaluation Tool. No errors where found and the four warnings are give to the paragraphs with justified text, but I decided to keep the justified text out of design choice.

![WAVE](assets/images/readme/accessibility.png) ![Alerts](assets/images/readme/alerts.png)
<br>
<br>

[Back to top](#testing)

---


### **Bugs and fixes**
There where a number of bugs and mishaps committed through the development as I tried to learn the best way to code the website. Due to the large hero images and split screen design, the media query adjustments required a lot of trial and errors remodeling before the result was okay on all the devices. 

**The major bugs where**: <br>
1. The hero image didn't fit the intended content area on desktop, the background color was showing at the top and bottom of the image.
    - Fixed by revisiting the LMS material.
2. Image text didn't stay where it was intended while testing the site's responsiveness, especially when I turned the smaller screens for landscape position.
    - Fixed with the help of the media queries.
3. The sticky header and footer had text scrolling underneath or the text was not visible due to the said header and footer.
    - Fixed by revisiting the LMS material and by trying out own ideas.
4. The links in the header and footer was overshadowed by the neighboring links padding and didn't work on smaller screens.
    - Revisited the box-model lessons for better understanding. Changed padding to margin to keep the links at a distant from each other.
5. The hero image was too big on tablet screen size, covered the whole viewport window.
    - Resized the image and adjusted additional style in the media queries.
6. Lighthouse flagged the indiatimes.com link as bad SEO due to the initial text description around the link was none descriptive of the links purpose.
    - Rewrote the description containing the link.
7. Lighthouse also flagged the hero image for bad loading time which lowered the performance.
    - The image was to large, so a smaller version was downloaded and used instead. 
8. The image text was not contrasting enough against the hero image.
    - An overlay was added.
9. The text segment didn't scroll as wanted.
    - Revisited the lesson about overflow and added the property where it was needed.

<br>

For most of the bug fixes I went back to the [Code Institute](https://codeinstitute.net/) LMS and the learning material for the HTML ans CSS module and found the answers there. I also turned to the Slack community and the search function, where I found many answers. In a few cases I consulted external sources while searching for the answer using [Google](www.google.com). For more information about the external code used, see the section on the previous page.

<br>

**Bug not fixed**:
- The code I found on Stack Overflow to hide the scrollbar doesn't work in Internet Explorer and Firefox. There are other code examples on the same site but for this site I didn't want to include JavaScripts.
<br>

[Back to top](#testing)

---