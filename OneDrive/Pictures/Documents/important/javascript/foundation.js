// Javascript exceution context,it is a single threaded

//execution of code in js levels are mentioned below:
//->global execution context is mandatory
//->functional execution context
//->eval execution context


//the code runs in two phase
//1. memory creation phase or craetion phase-> only memory allocation phase
//2. execution phase->all teh execution happens here


//STEPS FOR EXECUTION OF CODE IN JS
// ->STEP 1- global execution or enviorment and it is loacted inside "this"
// ->STEP 2- memory phase allocates memory for all teh variables to 'undefined' and to fucntions 'definition'
// ->STEP 3- execution phase the variables are assingned their natural values.

/*if a fucntion is called then there is a new excution cycle containg new variable enviornment and exectuion thread inw hich only single lien is excuted as js ins single thread*/
/*after execytion of all the fucntion they get delete*/
/*outputs of return in functions are sent back to global excution*/
