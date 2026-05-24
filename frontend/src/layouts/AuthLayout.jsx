function AuthLayout({ children }) {

  return (

    <div>

      {children}

    </div>

  );

}

export default AuthLayout;


// "render whatever page comes inside layout"

// <AuthLayout>
//    <Login />
// </AuthLayout>