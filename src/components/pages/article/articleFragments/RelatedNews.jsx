import React, {Fragment} from 'react'

const RelatedNews = () => {

    return (
        <Fragment>
            <aside className="related-news mt-0 animated fadeIn fast container article-related-news col-lg-3 col-md-12 col-sm-12">
                <h2 className="text-center">RELACIONADO</h2>
                <div className="row">
                    <div className="card col-md-4 col-lg-11 p-0 mb-4 box-shadow">
                        <img className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/articles%2Ftesting-pic.jpg?alt=media&token=b8d2b458-009a-4f9e-a2b4-3c55ecf75804" alt=""/>
                        <div className="card-body">
                            <p className="card-text">Testing card (not working)</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted">20-05-2020</small>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-4 col-lg-11 p-0 mb-4 box-shadow">
                        <img className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/articles%2Ftesting-pic.jpg?alt=media&token=b8d2b458-009a-4f9e-a2b4-3c55ecf75804" alt=""/>
                        <div className="card-body">
                            <p className="card-text">Testing card (not working)</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted">20-05-2020</small>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-4 col-lg-11 p-0 mb-4 box-shadow">
                        <img className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/articles%2Ftesting-pic.jpg?alt=media&token=b8d2b458-009a-4f9e-a2b4-3c55ecf75804" alt=""/>
                        <div className="card-body">
                            <p className="card-text">Testing card (not working)</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted">20-05-2020</small>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </Fragment>
    )
}

export default RelatedNews
