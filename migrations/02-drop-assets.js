module.exports = async function (migration, { makeRequest }) {
    // get all assets
    const assets = await makeRequest({
        method: 'GET',
        url: `/assets`
    });
    
    // loop through assets
    for (const asset of assets.items) {
        if (asset.sys.publishedAt) { // unpublish asset if it is published
            await makeRequest({
                method: 'DELETE',
                url: `/assets/${asset.sys.id}/published`
            });
        }
        await makeRequest({ // delete asset
            method: 'DELETE',
            url: `/assets/${asset.sys.id}`
        });
    }
}