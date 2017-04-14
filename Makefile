.PHONY: build test watch clean

build:
	tsc -d -p .

watch:
	tsc -d -p . -w

test: build
	1c build
	ls build/test* | xargs -I {} 1c run {}

clean:
	rm -rf build lib node_modules
