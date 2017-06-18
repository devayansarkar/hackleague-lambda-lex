
0.1 - Let's setup the game 

To validate your result, we need to create a Lambda linking your account to the Hackleague platform.
 
- Open your AWS console and go to the Lambda service.
- Make sure you are using the North Virginia datacenter.
- Create a new Lambda function (without trigger) called `HackLeagueLink`. Choose `Node.js 6.10` for the Runtime.
- In the "Lambda function code" section, choose "Upload a .ZIP file" and upload the `lambda.zip` file. 
- Create a new role for this Lambda (the name does not matter).
- Save the Lambda.

- Click the `Test` button and change the test event to this :
```json
{
  "hackleague": "rocks"
}
```
You should get a response like this :
```
"It works ! Go to [URL] to validate your solution"
```