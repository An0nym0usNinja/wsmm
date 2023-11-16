module.exports = async function (migration, { makeRequest }) {
    // get all contentTypes
    const contentTypes = await makeRequest({
        method: 'GET',
        url: `/content_types`
    });

    // loop through contentTypes
    const contentTypeIds = contentTypes.items.map((contentType) => contentType.sys.id);
    for (const id of contentTypeIds) {
        migration.deleteContentType(id); // delete contentType
    }
}