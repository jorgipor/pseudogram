import React, { Component } from 'react';

class FileUpload extends Component {
	constructor() {
		super();
		this.state = {
	      uploadValue: 0
	    }
	}

	/*handleUpload (event) {
		const file = event.target.files[0];
		const storageRef = firebase.storage().ref(`/fotos/${file.name}`);
		const task = storageRef.put(file);
		task.on('state_changed', snapshot => {
			let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			this.setState({
				uploadValue: percentage
			})
		}, error => {
			console.log(`Error ${error.code}: ${error.message}`)
		}, () => {
			this.setState({
				uploadValue: 100,
				picture: task.snapshot.downloadURL
			})
		});
	}*/

	render() {
		return (
			<div>
				<progress value={this.state.uploadValue} max="100"></progress>
				<br/>
				<input type="file" onChange={this.props.onUpload} />
			</div>
		);
	}
}

export default FileUpload