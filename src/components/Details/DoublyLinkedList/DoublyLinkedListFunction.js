const fun = [
    {
        funName: "Count number of nodes",
        working: 
`//Function declaration
void count(struct node *start);

/*
1. Function arguments
        a. starting pointer node
2. return void
3. I know you can change it to retrun int type
*/

//Function defination
void count(struct node *start)
{
    struct node *p;
    int i = 0;
    p = start;

    while(p != NULL){
        p = p->next;
        i++;
    }

    printf("There is %d number of elements in list", i);
}
`
    },
    {
        funName: "Print list",
        working:
`//Function declaration
void printList(struct node *start);

/*
1. Funciton arguments
        a. starting pointer node
2. return void
*/

//Function defination
void display(struct node *start)
{
    struct node *p;
    p = start;

    if(start == NULL){
        printf("List is empty");
        return;
    }

    printf("List is:  ");
    while(p != NULL){
        printf("%d ", p->info);
        p = p->next;
    }
}

`
    },
    {
        funName: "Add element to the empty list",
        working: 
`//Function declaration
struct node *addtoempty(struct node *start, int data);

/*
1. Function arguments
        a. starting node pointer
        b. data to be inserted
2. Return starting node pointer
*/

//Function defination
struct node *addtoempty(struct node *start, int data)
{
    struct node *temp;

    if(start == NULL){
        temp = (struct node *)malloc(sizeof(struct node));
        temp->info = data;
        temp->next = NULL;
        temp->prev = NULL;
        start = temp;

        return start;
    }

    printf("List is not empty");

    return start;
}

`
    },
    {
        funName: "Add element at start of list",
        working:
`//Function declaration
struct node *addatbeg(struct node *start, int data);

/*
1. Function argument
        a. starting pointer node
        b. data to be inserted
2. Return starting pointer node
*/

//Function defination
struct node *addatbeg(struct node *start, int data)
{
    struct node *temp;
    temp = (struct node *)malloc(sizeof(struct node));

    temp->info = data;
    temp->prev = NULL;
    temp->next = start;
    start->prev = temp;
    start = temp;

    return start;
}
`
    },
    {
        funName: "Add element at the end of list",
        working:
`//Function declaration
struct node *addatend(struct node *start, int data);

/*
1. Function arguments
        a. starting pointer node
        b. data to be inserted
2. Return starting pointer node
*/

//Function defination
struct node *addatend(struct node *start, int data)
{
    struct node *temp, *p;
    temp = (struct node *)malloc(sizeof(struct node));
    temp->info = data;
    temp->next = NULL;

    p = start;

    while(p->next != NULL)
        p = p->next;

    p->next = temp;
    temp->prev = p;

    return start;
}
`
    },
    {
        funName: "Add after certian item(element)",
        working:
`//Function declaration
struct node *addafter(struct node *start, int data, int item);

/*
1. Function arguments
        a. starting pointer node
        b. data to be inserted
        c. after which item data to be inserted
2. Return starting pointer node
*/

//Function defination
struct node *addafter(struct node *start, int data, int item)
{
    struct node *temp, *p;
    temp = (struct node *)malloc(sizeof(struct node));
    temp->info = data;
    p = start;

    while(p != NULL){
        if(p->info == item){
            temp->next = p->next;
            temp->prev = p;
            if(p->next != NULL)
                p->next->prev = temp;
            p->next = temp;

            return start;
        }
        p = p->next;
    }

    printf("%d is not present in list  ", item);
    return start;
}
`
    },
    {
        funName: "Add before certain item(element)",
        working:
`//Function declaration
struct node *addbefore(struct node *start, int data, int item);

/*
1. Function arguments
        a. starting pointer node
        b. data to be inserted
        c. item before which data to be inserted
2. Return starting pointer node 
*/

//Function defination
struct node *addbefore(struct node *start, int data, int item)
{
    struct node *temp, *p;
    temp = (struct node *)malloc(sizeof(struct node));
    temp->info = data;

    if(start == NULL){
        printf("List is empty  ");
        return start;
    }

    if(start->info == item){
        start->prev = temp;
        temp->next = start;
        temp->prev = NULL;
        start = temp;
        return start;
    }

    p = start;

    while(p->next != NULL){
        if(p->info == item){
            temp->next = p;
            temp->prev = p->prev;
            p->prev->next = temp;
            p->prev = temp;

            return start;
        }
        p = p->next;
    }

    printf("%d is not present in list  ", item);

    return start;
}
`
    },
    {
        funName: "Add element at certain position",
        working:
`//Function declaration
struct node *addatpos(struct node *start, int data, int pos);

/*
1. Function arguments
        a. starting pointer node
        b. data to be inserted
        c. position at which data to be inserted
2. Return starting pointer node
*/

//Function definaiton
struct node *addatpos(struct node *start, int data, int pos)
{
    struct node *p, *temp;
    int i;

    if(start == NULL){
        printf("List is empty  ");
        return start;
    }

    if(pos == 1)
        return addatbeg(start, data);

    p = start;
    for(i=1; i<pos-1 && p!=NULL; i++)
        p = p->next;

    if(p == NULL){
        printf("List have %d less elements  ", pos);
        return start;
    }

    temp = (struct node *)malloc(sizeof(struct node));
    temp->info = data;
    temp->next = p->next;
    temp->prev = p;
    p->next->prev = temp;
    p->next = temp;

    return start;
}
`
    },
    {
        funName: "Reverse the list",
        working:
`//Function declaration
struct node *reverse(struct node *start);

/*
1. Function arguments
        a. starting pointer node
        b. data to be inserted
2. Return starting pointer node
*/

//Function defination
struct node *reverse(struct node *start)
{
    struct node *p1, *p2;
    p1 = start;
    p2 = p1->next;
    p1->next = NULL;
    p1->prev = p2;

    while(p2 != NULL){
        p2->prev = p2->next;
        p2->next = p1;
        p1 = p2;
        p2 = p2->prev;
    }
    start = p1;
    printf("List is reversed  ");
    return start;
}
`
    },
    {
        funName: "Delete node of given data",
        working:
`//Function declaration
struct node *del(struct node *start, int data);

/*
1. Function arguments
        a. starting pointer node
        b. data of node to be deleted
2. Return starting pointer node
*/

//Function defination
struct node *del(struct node *start, int data)
{
    struct node *p;

    if(start == NULL){
        printf("List is empty  ");
        return start;
    }

    if(start->next == NULL){
        if(start->info == data){
            p = start;
            start = NULL;
            free(p);
            return start;
        }else{
            printf("%d is not present in list  ", data);
            return start;
        }
    }

    p = start->next;

    while(p->next != NULL){
        if(p->info == data){
            p->next->prev = p->prev;
            p->prev->next = p->next;
            free(p);
            return start;
        }
        p = p->next;
    }

    if(p->info == data){
        p->prev->next = NULL;
        free(p);
        return start;
    }

    printf("Element %d not found  ", data);
    return start;
}
`
    },
    {
        funName: "Create list",
        working:
`//It use addto empty and add at end function do create list
//you have to only call create_list by passing and reciving start pointer

//Function declaration
struct node *create_list(struct node *start);

struct node *addtoempty(struct node *start, int data);
struct node *addatend(struct node *start, int data);

/*
1. Funcition arguments
        a. starting pointer node
2. Return starting pointer node
*/

//Function defination
struct node *create_list(struct node *start)
{
    int n, i, data;

    start = NULL;

    printf("Enter the number of node: ");
    scanf("%d", &n);

    if(n > 0){
        printf("Enter the element: ");
        scanf("%d", &data);
        start = addtoempty(start, data);
    }

    for(i=2; i<=n; i++){
        printf("Enter the element: ");
        scanf("%d", &data);
        start = addatend(start, data);
    }

    return start;
}

struct node *addtoempty(struct node *start, int data)
{
    struct node *temp;

    if(start == NULL){
        temp = (struct node *)malloc(sizeof(struct node));
        temp->info = data;
        temp->next = NULL;
        temp->prev = NULL;
        start = temp;

        return start;
    }

    printf("List is not empty ");

    return start;
}
struct node *addatend(struct node *start, int data)
{
    struct node *temp, *p;
    temp = (struct node *)malloc(sizeof(struct node));
    temp->info = data;
    temp->next = NULL;

    p = start;

    while(p->next != NULL)
        p = p->next;

    p->next = temp;
    temp->prev = p;

    return start;
}
`
    }

];



export default fun;