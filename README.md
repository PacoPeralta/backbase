# Backbase Front End Assignment: Francisco Peralta

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

#How to run this great app
- First step, let's install the dependencies needed! Go to the app root directory and run 'npm install'
- When the install is finished, you can run the `ng serve` (again in the app root directory) to run a local server. Then, go to your browser and open `http://localhost:4200`.
- You can also run `ng serve --o` to open automatically your app in your predefined browser.
- If you know your IP address, because geek, I suggest to run `ng serve --host <youreIPaddress>`.
This way you can access from any device connected into the same network, all you need to do is to open your favourite browser and go to
`http://<youreIPaddress>:4200` (The default Angular port). Cool, eh!
- The app will automatically reload if you change any of the source files.

##How to build your app
-Do you want to deploy your amazing app? Easy as pie!
Run `ng build` in the app root directory. The build artifacts will be stored in the `dist/` directory. 
Use the `--prod` flag for a production build.

##Developer notes
###App behavior
This app is build in three principal components.
- App component: This is the wrapper component in which the rest of our components are going to be called.
Nothing to special in here, except for our complete App.
- Transfer component: In this, you can create the transfers you want. 
The source account is set by default (I invite this time), but as always, restrictions apply ... buu.
An account destination and amount are required, so you need to fill this fields to make a transfer. 
Once you did this, you can click the submit button and see the details of your transaction just to check twice, you know... it's money! 
If everything is good, click the transfer button to complete the transaction! If you need to change something, just click outside the confirmation message to close it and make the changes.
Every time you make a transaction, this is going to be added in the Transactions component.
- Transactions component:
Last but not least, the Transaction component! In this one you can see the historical of your transfers.
You can sort this values by Date, Beneficiary or Amount or search an specific transfer typing the Beneficiary name into the input field.

###Technical notes
##Angular version
This project was generated with Angular CLI version 7.3.8. that is the newest version.
I decided to use this version because is compatible with Angular 6, and if we want to add some of the great new features of Angular in the future, like the amazing drag-and-drop we can do it.
 
##Mobile first
The styles for this app are created under the Mobile First pattern.
As we know, the most of the users use their mobile devices to browse in to the internet, that's the main reason this app is full responsiveness and
all the components adapt to their wrappers.
I established two media queries breakpoints for medium-screen mobile sizes and tablets to show the app beautiful everywhere.

##SCSS as a preprocessor
I used SCSS as a CSS preprocessor to create variables and mixins for the main styles and values. This way, we can change and apply our styles 
in a better, faster and more readable way.

## Unit test
Karma is already installed in our app! 
All we need to do is use it =S.
Because of I running out of time, I can't create my test cases.
Anyway, I'll add this test cases in the next commit to my Github repository!

##Final Message
If you want it you can download this form Github in https://github.com/PacoPeralta/backbase.git
Thank you very much for this test and I hope you enjoy it as I did creating it!
Have fun!
