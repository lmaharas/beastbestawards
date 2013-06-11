var csv = require("csv"),
	whitelist = [ "handle", "name", "url", "blurb", "category", "tweet" ];

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
	var items = data.twitter;
	data.twitter = {
		items: items,
		categories: getCategories(items)
	};

	items = data.web;
	data.web =  {
		items: items,
		categories: getCategories(items)
	};
}

function getCategories(items) {
	var set = {}, result = [], i, n, k;
	for(i = 0, n = items.length; i < n ; i++) {
		set[items[i].category] = true;
	}

	for(k in set) {
		if(set.hasOwnProperty(k)) {
			result.push(k);
		}
	}

	return result.sort();
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
		obj[getPropertyName(file)] = records;
		fileDone(file);
	});
}

function getPropertyName(path) {
	return path.substr(path.lastIndexOf("/") + 1).replace(".csv", "");
}


