import React from 'react'

import { Button, FormGroup, Label, Input, Alert } from 'reactstrap';

import BoxShadow from '../../../components/generic/BoxShadow/BoxShadow'

import './PostForm.css'

import PostService from '../../../services/PostService'

export default class PostForm extends React.Component {

    constructor() {
        super()
        this.state = this.getInitialState()
        this.onClickButtonSavePost = this.onClickButtonSavePost.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    getInitialState(){
        return{
            title:'', 
            description:'', 
            text: '', 
            image:''
        }
    }

    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    componentDidMount() {
        if(this.props.match.params.id){
            PostService.getPostById(this.props.match.params.id).then((resp) => {
                const post = resp.data
                this.setState(
                    post
                )
            })
        }
    }

    onClickButtonSavePost(){
        PostService.save(this.state).then(()=>{
            this.setState(this.getInitialState())
            let messagePostSuccess = 'Post inserido com sucesso'
            if(this.state.id){
                 messagePostSuccess = 'Post alterado com sucesso'
            }
            this.setAlertMessage('success',messagePostSuccess)
        }).catch((err)=>{
            this.setAlertMessage('danger',  err.response.data.error)
        })
    }   

    setAlertMessage(color, message){
        this.setState({
            alert:{
                color, 
                message
            }
        })
    }

    renderAlert(){
        return this.state.alert ?<Alert color={this.state.alert.color}>{this.state.alert.message}</Alert> : undefined
    }
    render() {
        return <div className="PostForm">
            <div className="PostForm--content">
                <BoxShadow>
                {this.renderAlert()}
                <FormGroup>
                    <Label >Titulo</Label>
                    <Input type="text"
                        name="title"
                        value={this.state.title}
                        placeholder="Digite o titulo"
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label >Descrição</Label>
                    <Input
                        type="description"
                        name="description"
                        value={this.state.description}
                        placeholder="Digite a descrição"
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label >Imagem</Label>
                    <Input
                        type="description"
                        name="image"
                        value={this.state.image}
                        placeholder="Digite a url da imagem"
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Texto</Label>
                    <Input type="textarea" value={this.state.text} onChange={this.handleChange} name="text" />
                </FormGroup>
                <FormGroup>
                    <Button onClick={this.onClickButtonSavePost} color="primary">Salvar</Button>
                </FormGroup>
                </BoxShadow>
            </div>
        </div>
    }

}