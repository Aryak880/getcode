import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import {Navbar, Error, Footer, Body, ArrayListFunction, ArrayListBoiler, CircularLinkedListFunction, CircularLinkedListBoiler,
        DoublyLinkedListFunction, DoublyLinkedListBoiler, LinkedListFunction, LinkedListBoiler, LinkedListWithHeaderFunction,
        LinkedListWithHeaderBoiler, QueueUsingArrayFunction, QueueUsingArrayBoiler, QueueUsingLinkedListFunction, QueueUsingLinkedListBoiler,
        QueueUsintCircularLinkedListFunction, QueueUsintCircularLinkedListBoiler, StackUsingArrayFunction, StackUsingArrayBoiler,
        StackUsingLinkedListFunction, StackUsingLinkedListBoiler, QueueUsingCircularArrayFunction, QueueUsingCircularArrayBoiler,
        DequeueUsingCircularArrayFunction, DequeueUsingCircularArrarBoiler, DequeueUsingCircularLinkedListFunction, 
        DequeueUsingCircularLinkedListBoiler, PriorityQueueUsingLinkedListFunction, PriorityQueueUsingLinkedListBoiler
      } from './components';

import {ArrayListFile, CircularLinkedListFile, DoublyLinkedListFile, LinkedListFile, LinkedListWithHeaderFile, QueueUsingArrayFile, 
  QueueUsingLinkedListFile, QueueUsingCircularLinkedListFile, StackUsingArrayFile, StackUsingLinkedList, QueueUsingCircularArrayFile, 
  DequeueUsingCircularArrayFile, DequeueUsingCircularLinkedListFile, PriorityQueueUsingLinkedListFile,} from './components';



function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path='/' render={() => <Body fun={LinkedListFunction} boiler={LinkedListBoiler} fileLink={LinkedListFile} fileName="linkedList.c"/>} exact />

        <Route path='/arraylist' render={() => <Body fun={ArrayListFunction} boiler={ArrayListBoiler} fileLink={ArrayListFile} fileName="ArrayList.c"/>}/>

        <Route path='/doublylinkedlist' render={() => <Body fun={DoublyLinkedListFunction} boiler={DoublyLinkedListBoiler} fileLink={DoublyLinkedListFile} fileName="doublyLinkedList.c"/>} />

        <Route path='/linkedlistwithheadernode' render={() => <Body fun={LinkedListWithHeaderFunction} boiler={LinkedListWithHeaderBoiler} fileLink={LinkedListWithHeaderFile} fileName="LinkedListWithHeaderNode.c"/>} />

        <Route path='/circularlinkedlist' render={() => <Body fun={CircularLinkedListFunction} boiler={CircularLinkedListBoiler} fileLink={CircularLinkedListFile} fileName="circularLinkedList.c"/>} />

        <Route path='/stackusingarray' render={() => <Body fun={StackUsingArrayFunction} boiler={StackUsingArrayBoiler} fileLink={StackUsingArrayFile} fileName="stackUsigArray.c"/>} />

        <Route path='/stackusinglinkedlist' render={() => <Body fun={StackUsingLinkedListFunction} boiler={StackUsingLinkedListBoiler} fileLink={StackUsingLinkedList} fileName="stackUsingLinkedList.c"/>} />

        <Route path='/queueusingarray' render={() => <Body fun={QueueUsingArrayFunction} boiler={QueueUsingArrayBoiler} fileLink={QueueUsingArrayFile} fileName="queueUsingArray.c"/>} />

        <Route path='/queueusinglinkedlist' render={() => <Body fun={QueueUsingLinkedListFunction} boiler={QueueUsingLinkedListBoiler} fileLink={QueueUsingLinkedListFile} fileName="queueUsingLinkedList.c"/>} />

        <Route path='/queueusingcircularlinkedlist' render={() => <Body fun={QueueUsintCircularLinkedListFunction} boiler={QueueUsintCircularLinkedListBoiler} fileLink={QueueUsingCircularLinkedListFile} fileName="queueUsingCircularLinkedList.c"/>} />

        <Route path='/queueusingcirculararray' render={() => <Body fun={QueueUsingCircularArrayFunction} boiler={QueueUsingCircularArrayBoiler} fileLink={QueueUsingCircularArrayFile} fileName="queueUsingCircularArray.c"/>} />

        <Route path='/priorityqueueusinglinkedlist' render={() => <Body fun={PriorityQueueUsingLinkedListFunction} boiler={PriorityQueueUsingLinkedListBoiler} fileLink={PriorityQueueUsingLinkedListFile} fileName="priorityQueueUsingLinkedList.c"/>} />

        <Route path='/dequeueusingcirculararray' render={() => <Body fun={DequeueUsingCircularArrayFunction} boiler={DequeueUsingCircularArrarBoiler} fileLink={DequeueUsingCircularArrayFile} fileName="dequeueUsingCircularArray.c"/>} />

        <Route path='/dequeueusingcircularlinkedlist' render={() => <Body fun={DequeueUsingCircularLinkedListFunction} boiler={DequeueUsingCircularLinkedListBoiler} fileLink={DequeueUsingCircularLinkedListFile} fileName="dequeueUsingCircularLinkedList.c"/>} />

        {/* <Route path='/contactform' component={ContactUs} /> */}
        <Route component={Error} />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;