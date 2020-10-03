const LinkedListFunction = [
    {
        funName: "Print List",
        working: 
`//Function declaration
void printlist(struct node *head);

/*
1. Function arguments
        a. head pointer node
2. Return void
*/


//Function defination
struct node *p;
if(head->next == NULL){
    printf("List is empty  ");
    return;
}

p = head->next;

printf("List is :   ");
while(p != NULL){
    printf("%d ", p->data);
    p = p->next;
}
`
    },
    {
        funName: "Count elements",
        working: 
`//function declaration
int count(struct node *head);

/*
1. Funcition argument
        a. header pointer node
2. Return number of nodes

NOTE-> Number of nodes we are saving in head node data
*/

//function defination
int count(struct node *head)
{
    return head->data;
}
`
    },
    {
        funName: "Search element node",
        working:
`//Function declaraion
void search(struct node *head, int data);

/*
1. Function take poiner of heading node and item data to search
2.It simply print the index of the element if present
  in list other wise it return with a messase of element not found
  I believe you can change it to return index of the node 
*/

//Function defination
void search(struct node *head, int data)
{
    struct node *p;
    int i = 1;
    p = head->next;

    if(head == NULL){
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

    printf("%d is not present in list  ", data);
}`
    },
    {
        funName: "Add before given node data",
        working:
`//Function declaration
struct node *addbefore(struct node *head, int data, int item);

/*
1. Function take parameter
        a. head pointer of list
        b. data to be enter
        c. item data before which data to be entered

2. Function return pointer of heading node
*/

//Function defination
struct node *addbefore(struct node *head, int data, int item)
{
    struct node *temp, *p;
    p = head;

    while(p->next != NULL){

        if(p->next->data == item){
            temp = (struct node *)malloc(sizeof(struct node));
            temp->data = data;
            temp->next = p->next;
            p->next = temp;

            head->data = head->data + 1;

            return head;
        }

        p = p->next;
    }

    printf("%d is not present in list  ", item);
    return head;
}
`
    },
    {
        funName: "At element at the give position",
        working:
`//Function declaration
struct node *addatpos(struct node *head, int data, int pos);

/*
1. Function arguments
        a. head node pointer of the list
        b. data to be entered
        c. position where data to be entered

2. Function return pointer of the heading node
*/

//Function defination
struct node *addatpos(struct node *head, int data, int pos)
{
    struct node *temp, *p;
    int i;

    p = head;

    for(i=1; i<pos; i++){

        p = p->next;
        if(p == NULL){
            printf("There are less than %d elements  ", pos);
            return head;
        }
    }

    temp = (struct node *)malloc(sizeof(struct node));
    temp->data = data;
    temp->next = p->next;
    p->next = temp;

    head->data = head->data + 1;

    return head;
}
`
    },
    {
        funName: "Reverse the list",
        working:
`//Function declaration
struct node *reverse(struct node *head);

/*
1. Function argument
        a. head pointer of list

2. Function return head node pointer
*/

//Function defination
struct node *reverse(struct node *head)
{
    struct node *prev, *ptr, *next;
    prev = NULL;
    ptr = head->next;

    while(ptr != NULL){
        next = ptr->next;
        ptr->next = prev;
        prev = ptr;
        ptr = next;
    }

    head->next = prev;

    return head;
}
`
    },
    {
        funName: "Delete a node with given data",
        working: 
`//Function declaration
struct node *del(struct node *head, int data);

/*
1. Function argument
        a. head pointer of list
        b. data of node to be deleted

2. Function return head node pointer
*/

//Function defination
struct node *del(struct node *head, int data)
{
    struct node *temp, *p;
    p = head;

    while(p->next != NULL){
        if(p->next->data == data){
            temp = p->next;
            p->next = temp->next;
            free(temp);

            head->data = head->data - 1;
            return head;
        }
        p = p->next;
    }

    printf("Element %d not found  ", data);
    return head;
}
`
    },
    {
        funName: "Add element at the end of list",
        working:
`//Function declaration
struct node *addatend(struct node *head, int data);

/*
1. Function argument
        a. head pointer node
        b. data to be intered
2. Return head pointer node
*/

//Function defination
struct node *addatend(struct node *head, int data)
{
    struct node *p, *temp;
    temp = (struct node *)malloc(sizeof(struct node));
    temp->data = data;
    temp->next = NULL;

    head->data = head->data + 1;

    p = head;

    while(p->next != NULL)
        p = p->next;

    p->next = temp;

    return head;
}
`
    },
    {
        funName: "Create list",
        working:
`//This function use add at end to create list 

//Function declaration
struct node *create_list(struct node *head);

struct node *addatend(struct node *head, int data);

/*
1. Function argument 
        a. Head pointer node
2. Return head pointer node

NOTE-> call like this

head = create_list(head);
*/

//Function defination
struct node *create_list(struct node *head)
{
    int i, n, data;

    printf("Enter the number of nodes: ");
    scanf("%d",&n);

    for(i=0; i<n; i++){
        printf("Enter the element to be inserted: ");
        scanf("%d", &data);
        head = addatend(head, data);
    }

    return head;
}

struct node *addatend(struct node *head, int data)
{
    struct node *p, *temp;
    temp = (struct node *)malloc(sizeof(struct node));
    temp->data = data;
    temp->next = NULL;

    head->data = head->data + 1;

    p = head;

    while(p->next != NULL)
        p = p->next;

    p->next = temp;

    return head;
}
`
    }
];





export default LinkedListFunction;