# singleton-demo
A mini project for learning Single Pattern. A Class that always return the same instance. 

## Counter Class

![image](https://github.com/user-attachments/assets/087d92c7-ff9d-4a26-b0af-888675c56d6f)

## app.js

![image](https://github.com/user-attachments/assets/f6d44fbf-fdca-469c-a723-dd359314c56d)

In this example, we create 3 instances of Counter and call increase() method on each one. On the last instance, we call getCounter() and got 3 returned. That's mean each time we call increase(), it add up the same counter. And the final line, we test referential intergrity between counter1 and counter3, and the result is true. That's mean counter1 and counter3 is exactly the same.  
