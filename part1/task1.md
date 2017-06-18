
1.1 - Configure Lex

This part is about the configuration of Lex.

- Open your AWS console and go to the Lex service. 
- Create a Custom Bot named `MovieAdvisor`. 
- Create a new Intent named `IWantToSeeAMovie`.
- Create a slot named `MovieKind`. It will store the kind of movie you ask for a suggestion.
- In the Fullfilment part of the configuration, choose the Lambda we created in part 0 (`HackLeagueLink`).

The Intent must be able to handle this conversation :
```
                                       You   
                     I Want to see a movie   
                                             
   Lex                                       
   What kind of movie ?                      
                                       You   
                                    Comedy     <---- This must be stored in the "MovieKind" slot
   Lex
   ...
```

To validate your solution, use the embedded chat in Lex and type `I Want to see a movie`. 
If the configuration is correct, you should get an answer from Lex with a link.