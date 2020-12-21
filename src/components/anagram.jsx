import React, { Component } from "react";
import { Alert, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Anagram extends Component {
    state = {
        words: ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'],
        results: ''
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.is_anagrams(this.state.words);
    }

    changeHandler = (event) => {
        event.preventDefault();
        let entry = event.target.value;
        let entryArray = entry.split(",");
        this.setState({ words: entryArray });
    }

    is_anagrams(words) {
        const anagrams = {};
        words.forEach((word) => {
            const sortedWord = word.split("").sort().join("");
            if (anagrams[sortedWord]) {
                return anagrams[sortedWord].push(word);
            }
            anagrams[sortedWord] = [word];
        });

        const keys = Object.keys(anagrams);
        const values = keys.map(function (v) {
            return anagrams[v];
        })

        this.setState({ results: JSON.stringify(values)});    
    }

    render() { 
        const formContainer = {
            width: "500px",
        };

        return (
            <div style={formContainer}>
                <h2>Anagrams</h2>
                <Form onSubmit={this.submitHandler}>
                <FormGroup>
                    <Label for="exampleEmail">Words</Label>
                        <Input type="words" name="words" id="words" defaultValue={this.state.words} onChange={this.changeHandler} />
                        <FormText color="muted">
                            Please fill and split with comma
                        </FormText>
                </FormGroup>
                <Button>Check Anagrams</Button>
                </Form>
                <br></br>
                <FormGroup>
                    <Label for="exampleText">Output</Label>
                    <Input type="textarea" name="results" id="results" defaultValue={this.state.results} placeholder="Results here" />
                </FormGroup>
            </div>
        );
    }
}
 
export default Anagram;