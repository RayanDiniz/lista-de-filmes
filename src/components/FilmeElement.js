import React, { Component } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import api from '../server/api';
import "./FilmeElement.css";

class FilmeElement extends Component {
    state = {
        filmes: [],
        show: false,
    }

    async componentDidMount() {
        const response = await api.get();
        this.setState({ filmes: response.data.results });
    }

    render() {
        const { filmes } = this.state;
        const { show } = this.state;
        console.log(show);
        const handleClose = () => this.setState({ show: false });
        const handleShow = () => this.setState({ show: true });
	if (filme.id) {
		const mos = show;
	}else{
		const mos = false;
	}
        return (
            <Container>
		{filmes.map(
		filme => (
		    <div key={filme.id}>
			<li onClick={handleShow}>
		            <img
				src={"https://image.tmdb.org/t/p/w500" + filme.poster_path}
				alt={filme.original_title}
			    />
			</li>
		        <Modal show={mos} onHide={handleClose}>
		            <Modal.Header closeButton>
		                <Modal.Title>{filme.original_title}</Modal.Title>
		            </Modal.Header>
		            <Modal.Body>
				{filme.vote_average}
				{filme.overview}
			    </Modal.Body>
		            <Modal.Footer>
		                <Button variant="primary" onClick={handleClose}>
		                    Close
		                </Button>
		            </Modal.Footer>
		        </Modal>
		    </div>
		))}
	    </Container>
        );
    }
}
export default FilmeElement;
