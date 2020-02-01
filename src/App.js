import React from 'react';
import Card from './components/card/card.component';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [
                'white',
                'red',
                'yellow',
            ],

            counter: 1,
            width: 0,
        };
    }

    componentDidMount() {
        this.screenResolution();
    }

    left = () => {
        if (this.state.counter === 1) {
            this.setState({ counter: 3 }, () => {
                console.log(this.state.counter);
            });
        } else {
            this.setState({ counter: this.state.counter - 1 }, () => {
                console.log(this.state.counter);
            });
        }
    };

    screenResolution = () => {
        const width = window.screen.width;
        this.setState({ width: width });
    };

    right = () => {
        if (this.state.counter === 3) {
            this.setState({ counter: 1 }, () => {
                console.log(this.state.counter);
            });
        } else {
            this.setState({ counter: this.state.counter + 1 }, () => {
                console.log(this.state.counter);
            });
        }
    };

    render() {
        return (
            <div className='app'>
                <h1>STARTUP4ALL</h1>
                <main>
                    <i class='fas fa-arrow-left' onClick={this.left} />
                    <div className='cards'>
                        {this.state.width <= 600 ? (
                            this.state.colors.map((color, i) => {
                                return (
                                    <Card
                                        display={this.state.counter === i+1 ? 'flex' : 'none'}
                                        text={i + 1}
                                        color={color}
                                    />
                                );
                            })
                        ) : (
                            this.state.colors.map((color, i) => {
                                return <Card display='flex' text={i + 1} color={color} />;
                            })
                        )}
                    </div>
                    <i class='fas fa-arrow-right' onClick={this.right} />
                </main>
            </div>
        );
    }
}

export default App;
