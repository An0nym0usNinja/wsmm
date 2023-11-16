module.exports = async function (migration, { makeRequest }) {
    // get all entries
    const entries = await makeRequest({
        method: 'GET',
        url: `/entries`
    });
    
    // loop through entries
    for (const entry of entries.items) {
        if (entry.sys.publishedAt) { // unpublish entry if it is published
            await makeRequest({
                method: 'DELETE',
                url: `/entries/${entry.sys.id}/published`
            });
        }
        await makeRequest({ // delete entry
            method: 'DELETE',
            url: `/entries/${entry.sys.id}`
        });
    }
}