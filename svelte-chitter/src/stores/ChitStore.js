import { writable } from "svelte/store"
import { fetchChits, incLikes } from "../backend/Api";

function createChitStore() {
	const { subscribe, set, update } = writable([]);
	return {
		subscribe,
		// set,
		update,
		addNewChit: (newChit) => {
			update(e => [...e, newChit]);
		},
		likeChit: (id) => {
			let newCount = 1;
			update(pastChits => {
				pastChits.map((chit) => {
					if (chit.id === id) {
						chit.likes += 1;
						newCount = chit.likes;
					}

				});
				incLikes(id, newCount)
				return pastChits;
			});
		},
		loadChits: async () => {
			let data = await fetchChits();
			set(data);
		}
	}
}

export const ChitStore = createChitStore()