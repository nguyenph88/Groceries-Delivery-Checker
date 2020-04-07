# Groceries Delivery Checker
A very simple chrome extesion that help check the availabity of groceries delivery service such as: Amazon Fresh, Amazon Wholefood, Instacart, Costco, etc.
(Note that Costco is using Instacart so it's better to order directly on Instacart)

##### Disclaimer
The extension simply refreshes the current checkout page and check for delivery window, it's harmless but again use-at-your-own-risk, i'm using it right now if you wonder. The code is published and contribution is welcome.

***Is it cheating? My friend needs to check his/her computer every minute or so to get the delivery windows.***
*Technially? No.
Morally and ethically? It's how you look at it.*

## Instruction - How to

##### How to install it from this repo
(You can skip this step if you are already added it from Chrome Extension Store)
  - Click on the green `Clone/Download` button and download it as a zip
  - Extract the zip file to anywhere on your computer
  - Open chrome, go to `chrome://extensions/`
  - On the top, enable `Developer Mode`
  - Click `Load Unpacked` and browse the folder you just extracted
  - The extension should be enabled now

##### How to use it
Simply add all the items you want into your cart then go to the checkout page where the delivery availability is shown. The extension will take care of the rest.
  - You can leave that tab open and work on other tabs, or just do something else.
  - The basket icon on toolbar will turn green, indicating that the extension is enabled on that page.
  - When a delivery window becomes available you will hear a rooster sound and a notification.
  - It's when you need to come back and check the option, and click order. (Note: the tool will not order for you)


## Changelogs

##### 0.0.2
  - Refresh Rate will be randomized from 8-30 seconds (on the checkout page)
  - Removed Costco as individual site, it's now Instacart
  - Add icon indicate on the enabled pages

##### 0.0.1
  - Initial release


## Contribution
Please use the "Issues" button above for suggestion, ideas, help with the code, sending some love, complains, etc.
https://github.com/nguyenph88/Groceries-Delivery-Checker/issues

## FAQs
Q: is it safe to use the tool?
A: It's how you look at it, i don't store any of your username/password. Please read the disclaimer.

Q: is it guaranteed that I will get the delivery window?
A: No, the extension just checks for availability automatically, not exploiting the system to get you the available slots.

Q: Will I get the same day delivery?
A: Yes and No, it depends on your local delivery schedules. 