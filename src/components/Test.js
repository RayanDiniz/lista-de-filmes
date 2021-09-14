import { Component } from 'react';
import api from '../server/api';

class Test extends Component {
    state = {
        filmes: [],
    }

    async componentDidMount() {
        const response = await api.get();
        this.setState({ filmes: response.data.results });
    }
    render() {
        const { filmes } = this.state;
        return filmes;
    }
}
export default Test;