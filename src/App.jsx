import "./style.css";
import Number from "./Number.jsx";
import React, { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(1);
  const incrementNumber = () => setNumber(number + 1);
  let list = [
    { id: 1, name: "one" },
    { id: 2, name: "two" },
    { id: 3, name: "three" },
    { id: 4, name: "four" },
  ];
  let nodes = list.map(num => <div key={num.id}>{num.name}</div>);
  return (
    <main>
      <section
        className={number % 2 === 0 ? "even" : "odd"}
        onClick={incrementNumber}
      >
        <Number>{number}</Number>
      </section>
      <section>
        {nodes}
      </section>
      <hr />
     {number < 10  && <ClassComponent text={'holaa' + number}/>}
     {number <= 5 && number > 3  && <FunctionComponent text={'holaa' + number}/>}
    </main>
  );
}


class ClassComponent extends React.Component {

  constructor(props) {
    super(props);
    // console.log('constructor');
  }
  componentDidMount() {
    // console.log('componentDidMount');
  }
  componentDidUpdate() {
    // console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    // console.log('componentWillUnmount');
  }

  render() {
    // console.log('render');
    return <div>Class Component: {this.props.text}</div>;
  }
}

function FunctionComponent(props) {
    console.log('render');

    useEffect(() => {
      console.log('componentDidUpdate');
    }, [props.text])

    useEffect(() => {
      console.log('componentDidMount');

      return () => {
        console.log('componentWillUnmount');
      }
    },[])


  return <div>Function Component: {props.text}</div>;

}

export default App;
