import '../App.css';

export default function Header () {
    // const linkStyle = {
    //     textDecoration: 'none',
    //     padding: "20px",
    //     display: 'block',
    //     borderRadius: '5px'
    // }

    return (
        <>
            <div className="pr-4 mb-5 py-2 wrap-name">
                <div className="wrap-details details-bg px-3 py-2">
                    <h1 className="fw-bold">Jalen Arms</h1>
                    <h4 className="fw-bold">Full-Stack Software Developer.</h4>

                </div>
                <nav className="navbar navbar-expand">
                    <div className="container-fluid d-flex justify-content-end">
                        <a className="navbar-brand text-white cst-link px-3" href="https://github.com/jalenarms1" target="_blank" rel="noreferrer">Github</a>
                        <a href="/contact" className="navbar-brand text-white cst-link px-3" data-bs-toggle="modal"  data-bs-target="#contactModal">Contact</a>
                        

                    </div>
                </nav>
                
                

            
            </div>
           
        </>
    )
}