const LinkedListFunction = [
    {
        funName: "Print List",
        working: 
`//Function declaration
void printlist(struct node *start);

//Function defination
void display(struct node *start)
{
    struct node *p;

    if(start == NULL){
        printf("List is empty");
        return;
    }
    p = start;

    printf("List of element");
    while(p != NULL){
        printf("%d ", p->data);
        p = p->next;
    }
}
        `
    },
    {
        funName: "Count elements",
        working: 
`//function declaration
void count(struct node *start);

//function defination
void count(struct node *start)
{
    struct node *p;
    int i = 0;

    p = start;

    while(p != NULL)
    {
        i++;
        p = p->next;
    }

    printf("Number of nodes are: %d", i);
}
        `
    },
    {
        funName: "Search element node",
        working:
`//Function declaraion
void search(struct node *start, int data);

/*
1. Function take poiner of starting node and item data to search
2.It simply print the index of the element if present
  in list other wise it return with a messase of element not found
  I believe you can change it to return index of the node 
*/

//Function defination
void search(struct node *start, int data)
{
    struct node *p;
    int i = 1;
    p = start;

    if(start == NULL){
        printf("List is empty");
        return;
    }

    while(p != NULL){
        if(p->data == data){
            printf("%d is present at index %d", data, i);
            return;
        }
        i++;
        p = p->next;
    }

    printf("%d is not present in list", data);
}`
    },
    {
        funName: "Add new element at begning of List",
        working:
`//Function defination
struct node *addatbeg(struct node *start, int data);


/*
1.Function take pointer of start node and data to insert
2.Function return pointer of the start node of the list
*/

//Function declaration
struct node *addatbeg(struct node *start, int data)
{
    struct node *p;

     p = (struct node *)malloc(sizeof(struct node));
     p->data = data;

     p->next = start;
     start = p;

     return start;
}
`
    },
    {
        funName: "Add new element at end of the list",
        working:
`//Function declaration
struct node *addatend(struct node *start, int data);

/*
1.Function take pointer of start node and data to insert
2.Function return pointer of the start node of the list
*/

//Function defination
struct node *addatend(struct node *start, int data)
{
    struct node *p, *temp;
    p = start;
    temp = (struct node *)malloc(sizeof(struct node));

    temp->data = data;
    temp->next = NULL;

    while(p->next != NULL)
        p = p->next;

    p->next = temp;

    return start;
}
`
    },
    {
        funName: "Add after given node data",
        working:
`//Function declaration
struct node *addafter(struct node *start, int data, int item);

/*
1. Function take parameter
        a. start pointer of list
        b. data to be enter
        c. item data after which data to be entered

2. Function return pointer of starting node
*/

//Function defination
struct node *addafter(struct node *start, int data, int item)
{
    struct node *p, *temp;
    p = start;

    while(p != NULL){
        if(p->data == item){
            temp = (struct node*)malloc(sizeof(struct node));
            temp->data = data;
            temp->next = p->next;
            p->next = temp;
            return start;
        }

        p = p->next;
    }

    printf("%d doesn't present in list", data);
    return start;
}
`
    },
    {
        funName: "Add before given node data",
        working:
`//Function declaration
struct node *addbefore(struct node *start, int data, int item);

/*
1. Function take parameter
        a. start pointer of list
        b. data to be enter
        c. item data before which data to be entered

2. Function return pointer of starting node
*/

//Function defination
struct node *addbefore(struct node *start, int data, int item)
{
    struct node *p, *temp;
    p = start;

    if(start == NULL){
        printf("List is empty");
        return start;
    }

    if(start->data == item){
        temp = (struct node *)malloc(sizeof(struct node));
        temp->data = data;
        temp->next = start;
        start = temp;
        return start;
    }

    while(p->next != NULL){
        if(p->next->data == item){
            temp = (struct node *)malloc(sizeof(struct node));
            temp->data = data;
            temp->next = p->next;
            p->next = temp;
            return start;
        }

        p = p->next;
    }

    printf("%d is not present in list", item);
    return start;
}
`
    },
    {
        funName: "At element at the give position",
        working:
`//Function declaration
struct node *addatpos(struct node *start, int data, int pos);

/*
1. Function arguments
        a. start node pointer of the list
        b. data to be entered
        c. position where data to be entered

2. Function return pointer of the starting node
*/

//Function defination
struct node *addatpos(struct node *start, int data, int pos)
{
    struct node *p, *temp;
    int i = 0;
    p = start;

    temp = (struct node*)malloc(sizeof(struct node));
    temp->data = data;

    if(pos == 1){
        temp->next = start;
        start = temp;
        return start;
    }

    for(i=1; i<pos-1 && p != NULL; i++)
        p = p->next;

    if(p == NULL){
        printf("List is small");
    }
    else{
        temp->next = p->next;
        p->next = temp;
    }

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
1. Function argument
        a. start pointer of list

2. Function return start node pointer
*/

//Function defination
struct node *reverse(struct node *start)
{
    struct node *pre, *ptr, *next;
    ptr = start;
    pre = NULL;

    while(ptr != NULL){
        next = ptr->next;
        ptr->next = pre;
        pre = ptr;
        ptr = next;
    }
    start = pre;
    return start;
}
`
    },
    {
        funName: "Delete a node with given data",
        working: 
`//Function declaration
struct node *del(struct node *start, int data);

/*
1. Function argument
        a. start pointer of list
        b. data of node to be deleted

2. Function return start node pointer
*/

//Function defination
struct node *del(struct node *start, int data)
{
    struct node *p, *temp;
    p = start;

    if(start == NULL){
        printf("List is empty");
        return start;
    }

    if(start->data == data){
        temp = start;
        start = start->next;
        free(temp);
        return start;
    }

    while(p->next != NULL){
        if(p->next->data == data){
            temp = p->next;
            p->next = temp->next;
            free(temp);
            return start;
        }

        p = p->next;
    }

    printf("%d is not present in list");
    return start;
}
`
    },
    {
        funName: "Swap element present at odd position(By swappin data part)",
        working:
`//Function declaration
void swapBydata(struct node *start);

/*
1. Function argument
        a. start pointer of the list

2. It return void
*/

//Function defination
void swapBydata(struct node *start)
{
    struct node *p;
    int temp, i= 1;
    p = start;

    while(p->next != NULL){
        if(i%2 != 0){
            temp = p->data;
            p->data = p->next->data;
            p->next->data = temp;
        }

        p = p->next;
        i++;
    }

    printf("List is swapped");

}
`
    },
    {
        funName: "Swap element present at odd position(By swappin nodes)",
        working:
`//Function declaration
struct node *swapBynext(struct node *head);

/*
1. Function argument
        a. start pointer of list

2. Function return pointer of start node
*/

//Function defination
struct node *swapBynext(struct node *head)
{
    struct node *remaing, *newHead;

    if(head == NULL  || head->next == NULL)
        return head;

    remaing = head->next->next;
    newHead = head->next;

    head->next->next = head;

    head->next = swapBynext(remaing);

    return newHead;
}
`
    },
    {
        funName: "Selection sort on list",
        working:
`//Function declaration
struct node *selectionSort(struct node *start);

/*
1. Function argument
        a. start poinert of list

2. Function return start pointer of list
*/

//Function defination
struct node *selectionSort(struct node *start)
{
    struct node *p, *q;
    int temp;
    p = start;

    if(start == NULL){
        printf("\nList is empty\n\n");
        return start;
    }

    for(p=start; p->next != NULL; p=p->next){
        for(q=p->next; q != NULL; q=q->next){
            if(p->data > q->data){
                temp = p->data;
                p->data = q->data;
                q->data = temp;
            }
        }
    }

    return start;
}
`
    },
    {
        funName: "Create list",
        working:
`//1. This function use addbeging and addend function to create list
//2. Call only Create list it will do all work for you!

//Function declaration
struct node *create_list(struct node *start););

struct node *addatbeg(struct node *start, int data);
struct node *addatend(struct node *start, int data);

/*
1. Funcatin argument 
        a. start pointer (NULL pointer)

2. Function return start pointer of created list
*/


//Function working
struct node *create_list(struct node *start)
{
    int data, i, n;
    printf("Enter number of elements do you want to enter: ");
    scanf("%d", &n);
    start = NULL;

    if(n==0)
        return start;

    printf("Enter the data into node: ");
    scanf("%d", &data);
    start = addatbeg(start, data);

    for(i=2; i<=n; i++){
	printf("Enter the data into node: ");
	scanf("%d", &data);
	start = addatend(start, data);
    }

    return start;
}

struct node *addatbeg(struct node *start, int data)
{
    struct node *p;

     p = (struct node *)malloc(sizeof(struct node));
     p->data = data;

     p->next = start;
     start = p;

     return start;
}

struct node *addatend(struct node *start, int data)
{
    struct node *p, *temp;
    p = start;
    temp = (struct node *)malloc(sizeof(struct node));

    temp->data = data;
    temp->next = NULL;

    while(p->next != NULL)
        p = p->next;

    p->next = temp;

    return start;
}

`
    },
    {
        funName: "Delete the given node pointer",
        working:
`//Function declaration
void delgivenPointer(struct node *pointer);

/*
1. Funciton argument
        a. pointer of node to be deleted

2. Function return void
*/

//Function defination
void delgivenPointer(struct node *pointer)
{
    struct node *temp;
    temp = pointer;

    *pointer = *(pointer->link);
    free(temp);
}
`
    }

];





export default LinkedListFunction;