import classNames from "classnames";
import React, { useContext } from "react";

import { config } from "@app/config";
import styles from "@app/styles/Flashcard.module.scss";

import { FlashcardID } from "@shared/components/types";
import { FlashcardsContext } from "@shared/contexts/flashcardsContext";
import { onStarClick } from "@shared/helpers/flashcards";

interface IProps {
  flashcardID: FlashcardID;
}

export const FlashcardActions = ({ flashcardID }: IProps) => {
  const {
    features: { star },
  } = config;
  const { setStarredFlashcardsIDs, starredFlashcardsIDs } =
    useContext(FlashcardsContext);

  const isStarred = starredFlashcardsIDs?.includes(flashcardID);
  const tooltipText = isStarred
    ? 'click to remove from "starred" section'
    : 'click to save in "starred" section';

  return (
    <div className={classNames(styles.cardActions)}>
      {star ? (
        <span
          className={classNames(styles.starCard, {
            [styles.starCardActive]:
              starredFlashcardsIDs?.includes(flashcardID),
          })}
          onClick={() => onStarClick({ flashcardID, setStarredFlashcardsIDs })}
        >
          ⭐
          <span className={classNames(styles.starCardTooltip)}>
            {tooltipText}
          </span>
        </span>
      ) : null}
    </div>
  );
};
