///<reference types ='cypress'/>

describe ( 'Test html project', () => {
    it('کاربر باید بتواند ثبت نام کند.' , () =>
{
cy.visit ("signUp/signup.html")
cy.get('#email').type ("mehsad@gmail.com")
cy.get('#firstname').type("mehrshad")
cy.get('#lastname').type("akbari")
cy.get('#birthdate').click()
cy.get('#birthdate').type("2001-04-11")
cy.get('#phone').type("09108228651")
cy.get('#password').type("6321")
cy.get('#password-confirm').type("6321")
cy.contains('button','Sign Up').click()

cy.on('window:alert', (alertText) => {
   
    expect(alertText).to.equal('Sign up successful!');
  })
});


it('کاربر باید بتواند لاگین کند.' , () =>
    {
        let massage = ["Sign up successful!" , "Login successful!"]
        let a = 0
        cy.visit ("signUp/signup.html")
        cy.get('#email').type ("mehsad@gmail.com")
        cy.get('#firstname').type("mehrshad")
        cy.get('#lastname').type("akbari")
        cy.get('#birthdate').click()
        cy.get('#birthdate').type("2001-04-11")
        cy.get('#phone').type("09108228651")
        cy.get('#password').type("6321")
        cy.get('#password-confirm').type("6321")
        cy.contains('button','Sign Up').click()
        
        cy.once('window:alert', (alertText) => {
        
            expect(alertText).to.equal("Sign up successful!");
            return true
          })
cy.get('#login-email').type("mehsad@gmail.com")
cy.get('#login-password').type("6321")
cy.contains('button','Log In').click()

 cy.on('window:alert', (alertText) => {

   expect(alertText).to.equal(massage[a]);
   a++
    })
 });
    

    it('کاربر باید پیام خوش امد گویی دریافت  کند.' , () =>
        {
            cy.visit ("signUp/signup.html")
            cy.get('#email').type ("mehsad@gmail.com")
            cy.get('#firstname').type("mehrshad")
            cy.get('#lastname').type("akbari")
            cy.get('#birthdate').click()
            cy.get('#birthdate').type("2001-04-11");
            cy.get('#phone').type("09108228651")
            cy.get('#password').type("6321")
            cy.get('#password-confirm').type("6321")
            cy.contains('button','Sign Up').click()

            cy.get('#login-email').type("mehsad@gmail.com")
            cy.get('#login-password').type("6321")
            cy.contains('button','Log In').click()

            cy.get(".dashboard-container")
            cy.contains('Welcome').should('be.visible');

        })
});




describe ("test html project 2" , () =>{

    it('کاربر برای ثبت نام فرمت ایمیا را اشتباه وارد میکند' , () =>
        {
        cy.visit ("signUp/signup.html")
        cy.get('#email').type ("mehsad@gmail.com")
        cy.get('#firstname').type("mehrshad")
        cy.get('#lastname').type("akbari")
        cy.get('#birthdate').click()
        cy.get('#birthdate').type("2001-04-11")
        cy.get('#phone').type("09108228651")
        cy.get('#password').type("6321")
        cy.get('#password-confirm').type("632")
        cy.contains('button','Sign Up').click()
        
        cy.on('window:alert', (alertText) => {
           
            expect(alertText).to.equal('Passwords do not match!');
          });

});
});
describe ("test html project 2" , () =>{
          it('کاربر ایمیل یا پسورد را اشتباه وارد میکند ' , () =>
                {
                    let massage = ["Sign up successful!" , "Login failed. Please check your email and password."]
                    let a = 0
                    cy.visit ("signUp/signup.html")
                    cy.get('#email').type ("mehsad@gmail.com")
                    cy.get('#firstname').type("mehrshad")
                    cy.get('#lastname').type("akbari")
                    cy.get('#birthdate').click()
                    cy.get('#birthdate').type("2001-04-11")
                    cy.get('#phone').type("09108228651")
                    cy.get('#password').type("6321")
                    cy.get('#password-confirm').type("6321")
                    cy.contains('button','Sign Up').click()
                    
                    cy.once('window:alert', (alertText) => {
                    
                        expect(alertText).to.equal("Sign up successful!");
                        return true
                      })
            cy.get('#login-email').type("mehsad@gmail.com")
            cy.get('#login-password').type("632")
            cy.contains('button','Log In').click()
            
             cy.on('window:alert', (alertText) => {
            
               expect(alertText).to.equal(massage[a]);
               a++
                })
             });
        
            });





