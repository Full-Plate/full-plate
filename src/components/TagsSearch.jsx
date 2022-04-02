
import { INGREDIENT } from './ingredients';
import './style.css';
import { WithContext as ReactTags } from 'react-tag-input';

const suggestions = INGREDIENT.map(ingredient => {
  return {
    id: ingredient,
    text: ingedient
  };
});

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const TagsSearch = () => {
  const [tags, setTags] = React.useState([
    { id: 'Tomoato', text: 'Tomato' },
    { id: 'Cheese', text: 'Cheese' },
    { id: 'Pasta', text: 'Pasta' },
    { id: 'Bread', text: 'Bread' }
  ]);

  const handleDelete = i => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = tag => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = index => {
    console.log('The tag at index ' + index + ' was clicked');
  };

  return (
    <div className="app">
      <div>
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="bottom"
          autocomplete
        />
      </div>
    </div>
  );
};


export default TagsSearch;