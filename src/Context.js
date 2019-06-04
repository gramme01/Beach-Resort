import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();

class RoomProvider extends Component {
	state = {
		rooms: [],
		sortedRooms: [],
		featuredRooms: [],
		loading: true
	};

	//getData

	componentDidMount() {
		//this.getData
		let rooms = this.formatData(items);
		let featuredRooms = rooms.filter(room => room.featured === true);
		this.setState({
			rooms,
			featuredRooms,
			sortedRooms: rooms,
			loading: false
		});
	}

	formatData(objs) {
		let tempItems = objs.map(obj => {
			let id = obj.sys.id;
			let images = obj.fields.images.map(image => image.fields.file.url);
			let room = { ...obj.fields, images, id };
			return room;
		});
		return tempItems;
	}

	getRoom = slug => {
		let tempRooms = [...this.state.rooms];
		const room = tempRooms.find(room => room.slug === slug);
		return room;
	};

	render() {
		return (
			<RoomContext.Provider
				value={{ ...this.state, getRoom: this.getRoom }}
			>
				{this.props.children}
			</RoomContext.Provider>
		);
	}
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
