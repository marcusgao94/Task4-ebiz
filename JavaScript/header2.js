var data = {
            "Allergies": [
            	"Astelin","Benadryl","Clarinex","Decadron","Entocort","Flonase","Nasonex nasal spray","Periactin","Phenergan","Quibron-t","Rhinocort","Serevent","Seroflo","Zyrtec"
            ],
            "Antibiotics": [
				"Amoxil", "Ampicillin", "Augmentin", "Bactrim", "Biaxi", "Cefixime", "Ceftin", "Ciplox", "Cleocin", "Doxycyclin", "Erythromycin", "Floxin", "Fucidin", "Keflex", "Keftab", "Minocin", "Minomycin", "Myambutol", "Noroxin", "Omnicef", "Panmycin", "Roxithromycin", "Stromectol", "Suprax", "Trimox", "Vanti", "Zithroma"
            ],
            "BirthControl": [
				"Alesse","Levlen","Mircett", "Yasmin"
			],
			"Diabetes": [
				"Actoplus Met", "Actos", "Amaryl", "Avapr", "Benfotiamine", "Cozaar", "Diabecon", "Duetac", "Glucophage", "Glucotrol XL", "Glycome", "Januvia", "Metformin", "Micronase", "Prandin", "Precose"
			],
			"PainRelief": [
				"Aleve","Anacin","Arcoxia","Artane","Aspirin","Azulfidine","Benemid","Cafergot","Colospa","Diclofenac Gel","Elavil","Flexisyn","Imitrex","Imuran","Lioresa","Maxalt","Mestinon","Mobic","Motrin","Naprosyn","Nimotop","Periactin","Phenergan","Pletal","Ponstel","Prednison","Probala","Pyridium","Rumalaya","Rumalaya forte","Rumalaya gel","Rumalaya liniment","Shallaki","Tegreto","Torado","Urispas","Voltaren","Voveran","Voveran sr"
			]
        };

        typeof $.typeahead === 'function' && $.typeahead({
            input: ".js-typeahead-input",
            minLength: 1,
            maxItem: 15,
            order: "asc",
            hint: true,
            group: {
                template: "{{group}} medicines!"
            },
            maxItemPerGroup: 5,
            dropdownFilter: "all medicines",
            emptyTemplate: 'No result for "{{query}}"',
            source: {
                Allergies: {
                    data: data.Allergies
                },
                Antibiotics: {
                    data: data.Antibiotics
                },
                "Birth Control": {
                    data: data.BirthControl
                }, 
                Diabetes: {
                	data: data.Diabetes
                },
                "Pain Relief": {
                	data: data.PainRelief
                }
            },
            callback: {
                onClickAfter: function (node, a, item, event) {

                    // href key gets added inside item from options.href configuration
                    window.location = "searchresults2.html";

                }
            },
            debug: true
        });