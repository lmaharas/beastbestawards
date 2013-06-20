var csv = require("csv"),
	whitelist = [ "section", "handle", "name", "url", "blurb", "category", "tweet" ],
	autocomplete_list = [];

module.exports = function (grunt) {
	grunt.registerTask('csv-to-json', 'Build the zone files.', function () {
		var done = this.async(), counter = 0, output = {};


		function fileDone(file) {
			grunt.log.writeln("Parsing File " + file + " DONE!");
			if(--counter === 0) {
				prepData(output);
				grunt.file.write("data.json",  JSON.stringify(output));
				done();
			}
		}

		grunt.file.expand("csv/*").forEach(function(file){
			counter++;
			parseCSV(file, output, fileDone, grunt);
		});
	});
};

function prepData(data) {

	if(data.twitter && data.twitter.items) {
		data.twitter.categories = getCategories(data.twitter.items, 'twitter');
		normalizeItems(data.twitter.items, 'twitter');
	}

	if(data.web && data.web.items) {
		data.web.categories = getCategories(data.web.items, 'web');
		normalizeItems(data.web.items, 'web');
	}
}

function normalizeItems(items, folderName) {
	var i, item, imgName, categoryId;
	for(i = 0; i < items.length; i++) {
		item = items[i];
		imgName = item.name.toLowerCase().replace(/[^a-z0-9]/g, "");

		
		item.imgPath = "img/" + folderName + "/" + imgName + ".jpg";
		

		if (folderName === "web") {
			item.imgPathLg = "img/" + folderName + "/" + imgName + "_home.png";
		} else {
			item.imgPathLg = "img/" + folderName + "/" + imgName + ".jpg";
		}

    categoryId = getCategoryId(item.category, folderName);
		item.id =  categoryId + "-" + imgName;

		item.categoryId = categoryId;

		var obj = {
			label: item.name + ', ' + item.handle,
			link: item.id
		};
		autocomplete_list.push(obj);
	}

}

function getCategoryId(name, prefix) {
	return prefix + '-' + name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function getCategories(items, prefix) {
	var set = {}, names = [], categories = [], i, k;
	for(i = 0; i < items.length; i++) {
		set[items[i].category] = true;
	}

	for(k in set) {
		if(set.hasOwnProperty(k)) {
			names.push(k);
		}
	}

	names = names.sort();

    for(i = 0; i < names.length; i++) {
        categories.push({
            id: getCategoryId(names[i], prefix),
            name: names[i]
        });
    }

    return categories;
}

function parseCSV (file, obj, fileDone, grunt) {

	var records = [];

	grunt.log.writeln("Parsing CSV: " + file);

	csv().from(file, { columns: true })
	.on("error", function (error) {
		grunt.log.writeln(error);
	})
	.on("record", function (row, index) {
		var filtered = {}, i, key, value;

		for(i = 0; i < whitelist.length; i++) {
			key = whitelist[i];
			value = row[key];
			if(value) {
				filtered[key] = value;
			}
		}

		records.push(filtered);
	}).on("end",function(){
		obj[getPropertyName(file)] = { items: records };
		obj['autocomplete'] = autocomplete_list;
		fileDone(file);
	});
}

function getPropertyName(path) {
	return path.substr(path.lastIndexOf("/") + 1).replace(".csv", "");
}


