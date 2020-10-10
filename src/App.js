import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import {Navbar, Error, Footer, Body, ArrayListFunction, ArrayListBoiler, CircularLinkedListFunction, CircularLinkedListBoiler,
        DoublyLinkedListFunction, DoublyLinkedListBoiler, LinkedListFunction, LinkedListBoiler, LinkedListWithHeaderFunction,
        LinkedListWithHeaderBoiler, QueueUsingArrayFunction, QueueUsingArrayBoiler, QueueUsingLinkedListFunction, QueueUsingLinkedListBoiler,
        QueueUsintCircularLinkedListFunction, QueueUsintCircularLinkedListBoiler, StackUsingArrayFunction, StackUsingArrayBoiler,
        StackUsingLinkedListFunction, StackUsingLinkedListBoiler, QueueUsingCircularArrayFunction, QueueUsingCircularArrayBoiler,

      } from './components';


function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path='/' render={() => <Body fun={LinkedListFunction} boiler={LinkedListBoiler} isAuthed={true}/>} exact />

        <Route path='/arraylist' render={() => <Body fun={ArrayListFunction} boiler={ArrayListBoiler} isAuthed={true}/>}/>

        <Route path='/doublylinkedlist' render={() => <Body fun={DoublyLinkedListFunction} boiler={DoublyLinkedListBoiler} isAuthed={true}/>} />

        <Route path='/linkedlistwithheadernode' render={() => <Body fun={LinkedListWithHeaderFunction} boiler={LinkedListWithHeaderBoiler} isAuthed={true}/>} />

        <Route path='/circularlinkedlist' render={() => <Body fun={CircularLinkedListFunction} boiler={CircularLinkedListBoiler} isAuthed={true}/>} />

        <Route path='/stackusingarray' render={() => <Body fun={StackUsingArrayFunction} boiler={StackUsingArrayBoiler} isAuthed={true}/>} />

        <Route path='/stackusinglinkedlist' render={() => <Body fun={StackUsingLinkedListFunction} boiler={StackUsingLinkedListBoiler} isAuthed={true}/>} />

        <Route path='/queueusingarray' render={() => <Body fun={QueueUsingArrayFunction} boiler={QueueUsingArrayBoiler} isAuthed={true}/>} />

        <Route path='/queueusinglinkedlist' render={() => <Body fun={QueueUsingLinkedListFunction} boiler={QueueUsingLinkedListBoiler} isAuthed={true}/>} />

        <Route path='/queueusingcircularlinkedlist' render={() => <Body fun={QueueUsintCircularLinkedListFunction} boiler={QueueUsintCircularLinkedListBoiler} isAuthed={true}/>} />

        <Route path='/queueusingcirculararray' render={() => <Body fun={QueueUsingCircularArrayFunction} boiler={QueueUsingCircularArrayBoiler} isAuthed={true}/>} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
