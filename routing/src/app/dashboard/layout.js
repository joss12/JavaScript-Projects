export default function DashboardLayout(props) {
  const conditional = true;

  return (
    <>
      {props.children}
      {conditional ? props.analytics : props.posts}
    </>
  );
}
