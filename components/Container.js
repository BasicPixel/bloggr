function Container(props) {
  return (
    <div className="container mx-auto rounded bg-nord2 p-4 my-4">
      {props.children}
    </div>
  );
}

export default Container;
