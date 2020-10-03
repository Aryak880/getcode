const fun = [
    {
        funName: "Count number of nodes",
        working: 
`//Function declaration
void count(struct node *last);

/*
1. Function arguments
        a. last pointer node
2. return void
3. I know you can change it to retrun int type
*/

//Function defination
void count(struct node *last)
{
    struct node *p;
    int i = 0;

    p = last->link;

    do
    {
        i++;
        p = p->link;
    }while(p != last->link);

    printf("Number of nodes are: %d  ", i);
}
`
    },
    {
        funName: "Print list",
        working:
`//Function declaration
void printList(struct node *last);

/*
1. Funciton arguments
        a. last pointer node
2. return void
*/

//Function defination
void printList(struct node *last)
{
    struct node *p;

    if(last == NULL){
        printf("List is empty  ");
        return;
    }
    p = last->link;

    printf("List of element  ");
    do{
        printf("%d ", p->info);
        p = p->link;
    }while(p != last->link);
}
`
    },
    {
        funName: "Add element at last of list",
        working:
`//Function declaration
struct node *addatend(struct node *last, int data);

/*
1. Function argument
        a. last pointer node
        b. data to be inserted
2. Return last pointer node
*/

//Function defination
struct node *addatend(struct node *last, int data)
{
    struct node *temp;
    temp = (struct node *)malloc(sizeof(struct node));

    temp->info = data;
    temp->link = last->link;
    last->link = temp;
    last = temp;

    return last;
}
`
    },
    {
        funName: "Add element at the start of list",
        working:
`//Function declaration
struct node *addatend(struct node *last, int data);

/*
1. Function arguments
        a. last pointer node
        b. data to be inserted
2. Return last pointer node
*/

//Function defination
struct node *addatbeg(struct node *last, int data)
{
    struct node *p;

     p = (struct node *)malloc(sizeof(struct node));
     p->info = data;

     if(last == NULL){
        last = p;
        last->link = last;
        return last;
     }

     p->link = last->link;
     last->link = p;

     return last;
}
`
    },
    {
        funName: "Add after certian item(element)",
        working:
`//Function declaration
struct node *addafter(struct node *last, int data, int item);

/*
1. Function arguments
        a. last pointer node
        b. data to be inserted
        c. after which item data to be inserted
2. Return last pointer node
*/

//Function defination
struct node *addafter(struct node *last, int data, int item)
{
    struct node *p, *temp;
    p = last->link;

    do{
        if(p->info == item){
            temp = (struct node*)malloc(sizeof(struct node));
            temp->info = data;
            temp->link = p->link;
            p->link = temp;
            return last;
        }

        p = p->link;
    }while(p != last->link);

    printf("%d doesn't present in list  ", data);
    return last;
}
`
    },
    {
        funName: "Add before certain item(element)",
        working:
`//Function declaration
struct node *addbefore(struct node *last, int data, int item);

/*
1. Function arguments
        a. last pointer node
        b. data to be inserted
        c. item before which data to be inserted
2. Return last pointer node 
*/

//Function defination
struct node *addbefore(struct node *last, int data, int item)
{
    struct node *p, *temp;
    p = last->link;

    if(last == NULL){
        printf("List is empty  ");
        return last;
    }

    if(last->info == item){
        temp = (struct node *)malloc(sizeof(struct node));
        temp->info = data;
        temp->link = last;
        last = temp;
        return last;
    }

    do{
        if(p->link->info == item){
            temp = (struct node *)malloc(sizeof(struct node));
            temp->info = data;
            temp->link = p->link;
            p->link = temp;
            return last;
        }

        p = p->link;
    }while(p->link != last->link);

    printf("%d is not present in list  ", item);
    return last;
}
`
    },
    {
        funName: "Add element at certain position",
        working:
`//Function declaration
struct node *addatpos(struct node *last, int data, int pos);

/*
1. Function arguments
        a. last pointer node
        b. data to be inserted
        c. position at which data to be inserted
2. Return last pointer node
*/

//Function definaiton
struct node *addatpos(struct node *last, int data, int pos)
{
    struct node *p, *temp;
    int i = 0;
    p = last->link;

    temp = (struct node*)malloc(sizeof(struct node));
    temp->info = data;

    if(pos == 1){
        temp->link = last;
        last = temp;
        return last;
    }

    for(i=1; i<pos-1 && p != NULL; i++)
        p = p->link;

    if(p == NULL){
        printf("List is small  ");
    }
    else{
        temp->link = p->link;
        p->link = temp;
    }

    return last;
}
`
    },
    {
        funName: "Create list",
        working:
`//It use addto empty and add at end function do create list
//you have to only call create_list by passing and reciving last pointer

//Function declaration
struct node *create_list(struct node *last);

struct node *addtoempty(struct node *last, int data);
struct node *addatend(struct node *last, int data);

/*
1. Funcition arguments
        a. last pointer node
2. Return last pointer node
*/

//Function defination
struct node *create_list(struct node *last)
{
    int data, i, n;
    printf("Enter number of elements do you want to enter: ");
    scanf("%d", &n);
    last = NULL;

    if(n==0)
        return last;

    printf("Enter the data into node: ");
    scanf("%d", &data);
    last = addatbeg(last, data);

    for(i=2; i<=n; i++){
	printf("Enter the data into node: ");
	scanf("%d", &data);
	last = addatend(last, data);
    }

    return last;
}

struct node *addatbeg(struct node *last, int data)
{
    struct node *p;

     p = (struct node *)malloc(sizeof(struct node));
     p->info = data;

     if(last == NULL){
        last = p;
        last->link = last;
        return last;
     }

     p->link = last->link;
     last->link = p;

     return last;
}

struct node *addatend(struct node *last, int data)
{
    struct node *temp;
    temp = (struct node *)malloc(sizeof(struct node));

    temp->info = data;
    temp->link = last->link;
    last->link = temp;
    last = temp;

    return last;
}
`
    },
    {
        funName: "Search element in list",
        working:
`//Function declaration
void search(struct node *last, int data);

/*
1. Function arguments
        a. last node pointer
        b. data to be search
2. return void
3. If element present print the location of the element(1-N)
*/

void search(struct node *last, int data)
{
    struct node *p;
    int i = 1;

    if(last == NULL){
        printf("List is empty  ");
        return;
    }

    p = last->link;

    do{
        if(p->info == data){
            printf("%d is present at index %d  ", data, i);
            return;
        }
        i++;
        p = p->link;
    }while(p != last->link);

    printf("%d is not present in list  ", data);
}
`
    }

];



export default fun;