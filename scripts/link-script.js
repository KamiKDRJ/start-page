
/**
 * Creates the link attributes from the map imported as map
 *
 */


let linkContainer = document.getElementById("links")


/**
 * Loops through map provided and creates groups and links
 * linkContainer < newGroup < newParagraph < newLink
*/
function setupLinks(map) {
    /** Loop Through Map Data */
    for (let i = 0; i < map.length; i++) {
        let groupData = map[i];


        /**
         * Creates new div element
         * Adds group from map to div
         */
        let newGroup = document.createElement("div");
        newGroup.className = "group";
        linkContainer.appendChild(newGroup);


        /**
         * Creates new h1 element
         * Adds group name to newGroup
         */
        let groupTitle = document.createElement("h1");
        groupTitle.className = "group-title";
        groupTitle.innerHTML = groupData.title;
        newGroup.appendChild(groupTitle);


        /** Loops through links in groupData */
        for (let j = 0; j < groupData.links.length; j++) {
            let itemData = groupData.links[j];

            /**
             * Creates new paragraph
             * Adds paragraph to newGroup
             */
            let newParagraph = document.createElement("p");
            newGroup.appendChild(newParagraph);

            /**
             * Creates new link
             * Adds link to newParagraph
             */
            let newLink = document.createElement("a");
            newLink.className = "link";
            newLink.innerHTML = itemData.name;
            newLink.setAttribute("href", itemData.url);
            newLink.setAttribute("target", "_blank");
            newParagraph.appendChild(newLink);
        }
    }
}

/** Uses LINKMAP from link-map.js */
setupLinks(LINKMAP)